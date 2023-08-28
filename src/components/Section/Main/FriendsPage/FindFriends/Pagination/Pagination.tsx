import {FC} from "react";
import styles from "./Pagination.module.css"
import {setCurrentPageAC} from "../../../../../../redux/reducers/usersReducer.ts";
import {useAppDispatch} from "../../../../../../hooks/useAppDispatch.ts";

export const Pagination: FC<PropsType> = ({
                                              currentPage,
                                              totalCountUsers,
                                              pageSize,

                                          }) => {
    const dispatch = useAppDispatch()

    const totalPages: number = Math.ceil(totalCountUsers / pageSize);
    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    let startPage = Math.max(currentPage - 3, 1);
    let endPage = Math.min(currentPage + 3, totalPages);

    if (startPage === 1) {
        endPage = Math.min(7, totalPages);
    } else if (endPage === totalPages) {
        startPage = Math.max(totalPages - 6, 1);
    }

    const handlePageClick = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    };

    return (
      <div>
          <ul className={styles.pagination}>
              <li className={`${styles.pageItem}${isFirstPage ? ` ${styles.disabled}` : ""}`}>
                  <button
                    type="button"
                    className={styles.pageLink}
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={isFirstPage}
                  >
                      &laquo;
                  </button>
              </li>
              {pages.filter((page) => page >= startPage && page <= endPage)
                .map((page) => (
                  <li key={page}
                      className={`${styles.pageItem}${currentPage === page ? ` ${styles.active}` : ""}`}>
                      <button
                        type="button"
                        className={styles.pageLink}
                        onClick={() => handlePageClick(page)}>
                          {page}
                      </button>
                  </li>
                ))}
              <li className={`${styles.pageItem}${isLastPage ? ` ${styles.disabled}` : ""}`}>
                  <button
                    type="button"
                    className={styles.pageLink}
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={isLastPage}
                  >
                      &raquo;
                  </button>
              </li>
          </ul>
      </div>
    );
};

type PropsType = {
    currentPage: number
    totalCountUsers: number
    pageSize: number
}
