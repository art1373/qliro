import React from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";

type Props = {
  pageCount: number;
  handlePageClick?: () => void;
};

const Pagination = ({ pageCount, handlePageClick }: Props) => {
  return (
    <ReactPaginate
      previousLabel={"Back"}
      nextLabel={"Next"}
      breakLabel={"..."}
      initialPage={0}
      pageCount={pageCount}
      marginPagesDisplayed={0}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      activeClassName="active-link"
      disabledClassName="disabled"
      nextClassName="next-label"
      previousClassName="back-label"
      pageClassName="page"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagination;
