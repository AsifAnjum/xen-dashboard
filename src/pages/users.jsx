import { useState } from "react";
import TableLoader from "../components/tableLoader";
import useGetUsers from "../hooks/useGetUsers";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { data, isLoading, isError } = useGetUsers();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const [sortBy, setSortBy] = useState("");

  const handleSortBy = (a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "email") {
      return a.email.localeCompare(b.email);
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
              Email
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              City
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-00">
          {data
            .filter(handleSearchFilter)
            .sort(handleSortBy)
            .map((user) => (
              <tr
                onClick={() => navigate(`/user/${user.id}`)}
                className="cursor-pointer"
                key={user.id}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.address?.city || "N/A"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );

  return (
    <div className="relative min-h-screen p-10 rounded-lg shadow-xl shadow-slate-700">
      <h1 className="text-xl font-bold font-mono">All Users</h1>

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
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
      </div>

      {/* table  */}
      <div className="">
        <div className="py-2 !overflow-x-scroll ">{content}</div>
      </div>
    </div>
  );
};
export default Users;
