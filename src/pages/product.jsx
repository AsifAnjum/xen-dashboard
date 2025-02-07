import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/product/productApi";

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetProductQuery(id);

  if (isLoading)
    return <div className="h-96 w-96 bg-slate-500 animate-pulse"></div>;

  if (isError) return <div>Something went wrong</div>;

  if (Object.keys(data).length === 0) return <div>No user found</div>;

  const { name } = data;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
    </div>
  );
};
export default Product;
