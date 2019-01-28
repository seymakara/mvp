import React from 'react';
import _ from 'lodash'
const Pagination = (props) => {
  const { itemsCount, pageCount } = props;
  const numberOfPages = itemsCount / pageCount;
  const pages = _.range(1, numberOfPages + 1);

  return <nav>
    <ul className="pagination">
      {pages.map(page => (
        <li className="page-item" key={page}>
          <a href="" className="page-link">{page}</a>
        </li>
      ))}
    </ul>
  </nav>
}

export default Pagination;