import { useState } from "react";
import TableLoader from "../components/tableLoader";
import useGetProducts from "../hooks/useGetProducts";
import TrashIcon from "../components/icon/trash";
import { useDeleteProductMutation } from "../features/product/productApi";
import { useEffect } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data, isLoading, isError } = useGetProducts();
  const navigate = useNavigate();
  const [
    deleteProduct,
    { isSuccess: isDeleteSuccess, isError: isDeleteError },
  ] = useDeleteProductMutation();
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("");

  const handleSortBy = (a, b) => {
    if (sortBy === "asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "desc") {
      return b.name.localeCompare(a.name);
    }

    return data;
  };

  const handleSearchFilter = (data) => {
    return data.name.toLowerCase().includes(search.toLowerCase());
  };

  let content;
  if (isLoading) content = <TableLoader />;

  if (isError) content = <div>Something went wrong</div>;

  if (!data || data.length === 0) content = <div>No users found</div>;

  if (data && data.length > 0)
    content = (
      <table className="min-w-full !overflow-x-scroll table">
        <thead className="border-b">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              #
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Name
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-00">
          {data
            .filter(handleSearchFilter)
            .sort(handleSortBy)
            .map((p) => (
              <tr
                onClick={() => navigate(`/product/${p.id}`)}
                className="cursor-pointer"
                key={p.id}
              >
                <td className="px-6 py-4 whitespace-nowrap">{p.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{p.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => deleteProduct(p.id)}>
                    <TrashIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Product deleted successfully");
    } else if (isDeleteError) {
      toast.error("Failed to delete product");
    }
  }, [isDeleteSuccess, isDeleteError]);

  return (
    <div className="relative min-h-screen p-10 rounded-lg shadow-xl shadow-slate-700">
      <h1 className="text-xl font-bold font-mono">All Products</h1>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Name"
          className="form-input"
        />
        <select
          name=""
          className="border p-2 rounded-md border-slate-400 focus:border-slate-600 focus:ring-1 focus:ring-slate-600 w-full"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="">Default</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* table  */}
      <div className="">
        <div className="py-2 !overflow-x-scroll ">{content}</div>
      </div>
    </div>
  );
};
export default Products;
