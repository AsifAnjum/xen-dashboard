import LoginForm from "../form/loginForm";

const Login = () => {
  return (
    <div className="bg-login ">
      <div className="max-w-3xl mx-auto p-4 flex flex- justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold font-mono">Xentro Login</h1>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
