import React from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

import styles from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onSetCurrentPage,
  portionSize = 20,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = React.useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 && (
        <BiLeftArrow
          className={styles.arrow}
          onClick={() => setPortionNumber(portionNumber - 1)}
        />
      )}
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return (
            <div
              onClick={() => onSetCurrentPage(page)}
              className={styles.wrapper}
            >
              <span
                className={
                  currentPage === page
                    ? styles.selectedPage
                    : styles.notSelectedPage
                }
              >
                {page}
              </span>
            </div>
          );
        })}
      {portionCount > portionNumber && (
        <BiRightArrow
          className={styles.arrow}
          onClick={() => setPortionNumber(portionNumber + 1)}
        />
      )}
    </div>
  );
};

export default Paginator;
