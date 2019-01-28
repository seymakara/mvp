import React from 'react';
import _ from 'lodash'

const paginate = (items, pageNumber, itemsPerPage) => {
  let startingIndex = (pageNumber - 1) * itemsPerPage;
  return _(items).slice(startingIndex).take(itemsPerPage).value();
}

const Pagination = (props) => {

  const { onPageChange, itemsCount, itemsPerPage, currentPage } = props;
  const numberOfPages = Math.ceil(itemsCount / itemsPerPage);
  const pages = _.range(1, numberOfPages + 1);

  return <nav>
    <ul className="pagination">
      {pages.map(page => (
        <li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
          <a onClick={() => onPageChange(page)} className="page-link">{page}</a>
        </li>
      ))}
    </ul>
  </nav>
}

export { Pagination, paginate };
