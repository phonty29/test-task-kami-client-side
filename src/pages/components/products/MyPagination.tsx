import { useEffect, useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useAppDispatch, useAppSelector } from '../../../rtk/hooks';
import { selectProductsState, turnPage } from '../../../rtk/slice';

function MyPagination() {
  const dispatch = useAppDispatch();
  const { items, currentPage } = useAppSelector(selectProductsState);
  const [pages, setPages] = useState([1]);
  useEffect(() => {
    const pageNumber = Math.ceil(items.length/5);
    setPages(Array.from(Array(pageNumber).keys()));
  }, [items]);

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map((page, index, array) => (<Pagination.Item key={index} className={currentPage == page+1 && "active"} onClick={(e) => {dispatch(turnPage(page+1))}}>{page+1}</Pagination.Item>))}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default MyPagination;