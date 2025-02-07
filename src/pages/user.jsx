import { useParams } from "react-router-dom";

import { useGetUserQuery } from "../features/user/userApi";

const User = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(id);

  if (isLoading)
    return <div className="h-96 w-96 bg-slate-500 animate-pulse"></div>;

  if (isError) return <div>Something went wrong</div>;

  if (Object.keys(data).length === 0) return <div>No user found</div>;

  const { name, username, email, address, phone, website, company } = data;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-4">{name}</h2>
      <p className="text-gray-700">
        <strong>Username:</strong> {username}
      </p>
      <p className="text-gray-700">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:Sincere@april.biz"
          className="text-blue-500 hover:underline"
        >
          {email}
        </a>
      </p>
      <p className="text-gray-700">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-700">
        <strong>Website:</strong>{" "}
        <a
          href={website}
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          {website}
        </a>
      </p>

      <div className="mt-4">
        <strong className="block text-gray-700">Company:</strong>
        <p className="text-gray-700">{company?.name || "N/A"}</p>
        <p className="text-gray-500">{company?.catchPhrase || "N/A"}</p>
      </div>

      <div className="mt-4">
        <strong className="block text-gray-700">Address:</strong>
        <p className="text-gray-700">
          {address?.street || "N/A"}, {address?.suite || "N/A"} ,{" "}
          {address?.city || "N/A"} , {address?.zipcode || "N/A"} ,{" "}
          {address?.geo?.lat || "N/A"} , {address?.geo?.lng || "N/A"}
        </p>
      </div>
    </div>
  );
};
export default User;
