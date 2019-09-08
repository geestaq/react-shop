import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      presentPage: props.initialPage,
    };
  }

  changePage = (newPage) => {
    const { onPageChange, perPage } = this.props;

    this.setState({ presentPage: newPage });
    onPageChange(newPage, perPage);
  }

  render() {
    const { pages } = this.props;
    const { presentPage } = this.state;
    const { changePage } = this;

    let prevLink = '';
    if(presentPage > 1) {
      prevLink = <li
        key="0"
        onClick={() => this.changePage(presentPage-1)}
        className="pagination-list-item">&lt;</li>;
    }

    let nextLink = '';
    if(presentPage < pages) {
      nextLink = <li
        key={pages}
        onClick={() => this.changePage(presentPage+1)}
        className="pagination-list-item">&gt;</li>;
    }

    return (
      <div className="pagination float-right">
        <ul className="pagination-list">
          {prevLink}
          {[...Array(pages)].map((el, page) =>
            <li
                key={++page}
                onClick={() => this.changePage(page)}
                className={`pagination-list-item${((page) === presentPage) ? ' pagination-list-item--active' : ''}`}>
                {page}
            </li>
          )}
          {nextLink}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  perPage: PropTypes.number
};

export default Pagination;
