import { useState } from "react";
import EyeIcon from "../components/icon/eye";
import EyeOffIcon from "../components/icon/eyeOff";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { toast } from "sonner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill all fields", {});
    }

    console.log("from fields", email, password);

    // dispatch(userLoggedIn({ email: "asif" }));
  };

  return (
    <div className="bg-login ">
      <div className="max-w-3xl mx-auto p-4 flex flex- justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold font-mono">Xentro Login</h1>

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="">
              <label className="form-label">Email</label>
              <input
                // type="email"
                name="email"
                // required
                className="form-input"
              />
            </div>

            <div className=" relative">
              <label className=" form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                className="form-input"
              />

              {showPassword ? (
                <button
                  className="absolute bottom-1 right-1"
                  type="button"
                  onClick={togglePassword}
                >
                  <EyeIcon />
                </button>
              ) : (
                <button
                  type="button"
                  className="absolute bottom-1 right-1"
                  onClick={togglePassword}
                >
                  <EyeOffIcon />
                </button>
              )}
            </div>

            <button type="submit" className="form-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
