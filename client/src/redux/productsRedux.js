import { products } from '../data/products';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getProductsPerPage = ({ products }) => products.productsPerPage;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getSort = ({ products }) => products.sort;
export const getPage = ({ products }) => products.presentPage;

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const CHANGE_SORTING = createActionName('CHANGE_SORTING');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const changeSorting = payload => ({ payload, type: CHANGE_SORTING });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      //TODO - pobrac produkty
      setTimeout(() => {
        dispatch(loadProducts(products));
        dispatch(endRequest());
      }, 1000);
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductsByPageRequest = (page, productsPerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      //TODO - ladowanie produktow przez api
      //let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      const payload = {
        data: products.slice(startAt, startAt + limit),
        amount: products.length,
        productsPerPage,
        presentPage: page,
      };

      setTimeout(() => {
        dispatch(loadProductsByPage(payload));
        dispatch(endRequest());
      }, 1000);

      //dispatch(loadProductsByPage(payload));
      //dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadProductsByPageWithSortRequest = (page, productsPerPage) => {
  return async (dispatch, getState) => {

    dispatch(startRequest());
    try {

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;
      const sort = getState().products.sort;

      //TODO - ladowanie produktow przez api
      //let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      //sortowanie
      switch(sort) {
        case 0: //A-Z
          products.sort((a,b) => { return a.name.localeCompare(b.name); });
          break;
        case 1: //Z-A
          products.sort((a,b) => { return b.name.localeCompare(a.name); });
          break;
        case 2: //od najtanszego
          products.sort((a,b) => a.price - b.price);
          break;
        case 3: //od najdrozszego
          products.sort((a,b) => b.price - a.price);
          break;
        default:
      }

      const payload = {
        data: products.slice(startAt, startAt + limit),
        amount: products.length,
        productsPerPage,
        presentPage: page,
      };

      setTimeout(() => {
        dispatch(loadProductsByPage(payload));
        dispatch(endRequest());
      }, 1000);

      //dispatch(loadProductsByPage(payload));
      //dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadSingleProductRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      //let res = await axios.get(`${API_URL}/post/${id}`);
      const product = products.find((item) => item.id === id);

      setTimeout(() => {
        dispatch(loadSingleProduct(product));
        dispatch(endRequest());
      }, 1000);

      //dispatch(loadSinglePost(res.data));
      //dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const changeSortingRequest = (newSort) => {
  return async (dispatch, getState) => {

    //dispatch(startRequest());
    try {
      const productsPerPage = getState().products.productsPerPage;

      dispatch(changeSorting(newSort));
      dispatch(loadProductsByPageWithSortRequest(1, productsPerPage));

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};


/* INITIAL STATE */
const initialState = {
  data: [],
  amount: 0,
  productsPerPage: 3,
  presentPage: 1,
  sort: 0, //A-Z
  singleProduct: null,
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_PRODUCTS_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.data],
      };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case CHANGE_SORTING:
      return { ...statePart, sort: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      return { ...statePart, request: initialState.request };
    default:
      return statePart;
  }
};
