const products = [
  {
    id: "1",
    name: "Produkt 1",
    description: "Opis produktu 1",
    price: 100,
  },
  {
    id: "2",
    name: "Produkt 2",
    description: "Opis produktu 2",
    price: 100,
  },
  {
    id: "3",
    name: "Produkt 3",
    description: "Opis produktu 3",
    price: 100,
  },
  {
    id: "4",
    name: "Produkt 4",
    description: "Opis produktu 4",
    price: 100,
  },
  {
    id: "5",
    name: "Produkt 5",
    description: "Opis produktu 5",
    price: 100,
  },
  {
    id: "6",
    name: "Produkt 6",
    description: "Opis produktu 6",
    price: 100,
  },
];


/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getProductsPerPage = ({ products }) => products.productsPerPage;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCTS_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });
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
      }, 2000);
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
      }, 2000);

      //dispatch(loadProductsByPage(payload));
      //dispatch(endRequest());

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
