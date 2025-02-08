import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { userLoggedIn } from "../features/auth/authSlice";
import EyeIcon from "../components/icon/eye";
import EyeOffIcon from "../components/icon/eyeOff";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
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
      toast.error("Please fill all fields");
      return;
    }

    if (password !== "123456") {
      setError("Password is incorrect");
      toast.error("Login failed", {
        description: "Please check your email and password",
      });
      return;
    }

    dispatch(userLoggedIn({ email: email }));
    toast.success("Login successful");
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="">
        <label className="form-label">Email</label>
        <input type="email" name="email" required className="form-input" />
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

      {error && <p className="text-red-500">{error}</p>}

      <button type="submit" className="form-button">
        Login
      </button>
    </form>
  );
};
export default LoginForm;
