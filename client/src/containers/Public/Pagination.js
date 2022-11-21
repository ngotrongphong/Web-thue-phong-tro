import React, { useState, useEffect } from "react";
import { PageNumber } from "../../components";
import { useSelector } from "react-redux";
import icons from "../../utils/icons";
import { useSearchParams } from "react-router-dom";

const { GrLinkNext, GrLinkPrevious } = icons;

const Pagination = ({ page }) => {
  const { count, posts } = useSelector((state) => state.post);
  const [arrPage, setArrPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isHideEnd, setIsHideEnd] = useState(false);
  const [isHideStart, setIsHideStart] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let page = searchParams.get("page");
    page && +page !== currentPage && setCurrentPage(+page);
    !page && setCurrentPage(1);
  }, [searchParams]);

  useEffect(() => {
    let maxPage = Math.ceil(count / process.env.REACT_APP_LIMIT_POSTS);
    let end = currentPage + 1 > maxPage ? maxPage : currentPage + 1;
    let start = currentPage - 1 <= 0 ? 1 : currentPage - 1;
    let temp = [];
    for (let i = start; i <= end; i++) temp.push(i);
    setArrPage(temp);
    currentPage >= maxPage - 1 ? setIsHideEnd(true) : setIsHideEnd(false);
    currentPage <= 2 ? setIsHideStart(true) : setIsHideStart(false);
  }, [count, posts, currentPage]);

  return (
    <div className="flex items-center justify-center gap-2 py-5 ">
      {!isHideStart && (
        <PageNumber
          icon={<GrLinkPrevious></GrLinkPrevious>}
          setCurrentPage={setCurrentPage}
          text={1}
        ></PageNumber>
      )}
      {!isHideStart && <PageNumber text={"..."}></PageNumber>}
      {arrPage.length > 0 &&
        arrPage.map((item) => {
          return (
            <PageNumber
              key={item}
              text={item}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></PageNumber>
          );
        })}
      {!isHideEnd && <PageNumber text={"..."}></PageNumber>}
      {!isHideEnd && (
        <PageNumber
          icon={<GrLinkNext></GrLinkNext>}
          setCurrentPage={setCurrentPage}
          text={Math.floor(count / posts.length)}
        ></PageNumber>
      )}
    </div>
  );
};

export default Pagination;
