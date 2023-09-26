import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProducts, addProduct, clearSuccess } from "./product.slice";
import { Sidebar } from "../../components/Sidebar/Sidebar";
export function Products() {

  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess, error } = useSelector(
    (state) => state.product
  );

  const handleProduct = (e) => {
    e.preventDefault();
    dispatch(addProduct({}));
    dispatch(clearSuccess());
  };


  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
    </div>
  );
}
