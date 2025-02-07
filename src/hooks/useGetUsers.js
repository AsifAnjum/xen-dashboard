import { useGetUsersQuery } from "../features/user/userApi";

const useGetUsers = () => {
  const { data, isLoading, isError, error } = useGetUsersQuery();

  return { data, isLoading, isError, error };
};
export default useGetUsers;
