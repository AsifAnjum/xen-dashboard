import { useGetProductsQuery } from "../features/product/productApi";

const useGetProducts = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  return { data, isLoading, isError, error };
};
export default useGetProducts;
