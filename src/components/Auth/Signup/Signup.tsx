import { LogIn } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";

export const Signup = () => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const [errors, setErrors] = useState<string | null>(null);
  const { isAuthenticated, actions } = useAuthentication();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setErrors("Passwords do not match");
      return;
    }

    const error = actions.signup({ username, password });

    if (error) {
      setErrors(error);
      return;
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[520px] flex flex-col rounded-[32px] bg-[#F6F6F7] p-2">
        <div
          role="dialog"
          aria-modal="true"
          className="bg-white px-14 pt-16 pb-12 shadow-[0_18px_48px_rgba(0,0,0,0.06)] rounded-[24px]"
        >
          <div className="mx-auto mb-10 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F5F7FA]">
            <LogIn className="h-7 w-7 text-[#444]" strokeWidth={2} />
          </div>

          <h2 className="mb-1 text-center text-[20px] font-semibold text-[#1C1C1E]">
            Create an account to continue
          </h2>

          <p className="mb-10 text-center text-[15px] text-gray-500">
            Create an account to access all the features on this app
          </p>

          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <label
                className="mb-2 block text-[14px] font-medium text-[#1C1C1E]"
                htmlFor="username"
              >
                Email or username
              </label>
              <input
                name="username"
                id="username"
                type="email"
                required
                placeholder="Enter your email or username"
                className="w-full h-[48px] rounded-xl bg-[#F4F4F5] px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-400"
                aria-label="Email or username"
              />
            </div>

            <div>
              <label
                className="mb-2 block text-[14px] font-medium text-[#1C1C1E]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your password"
                className="w-full h-[48px] rounded-xl bg-[#F4F4F5] px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-400"
                aria-label="Password"
              />
            </div>

            <div>
              <label
                className="mb-2 block text-[14px] font-medium text-[#1C1C1E]"
                htmlFor="confirmPassword"
              >
                Repeat password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                placeholder="Enter your password again"
                className="w-full h-[48px] rounded-xl bg-[#F4F4F5] px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-400"
                aria-label="Repeat password"
              />
            </div>

            {errors && (
              <div className="text-red-600 text-sm bg-red-100 border border-red-200 p-2 rounded">
                {errors}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-[48px] rounded-xl bg-[#4F46E5] text-[15px] font-medium text-white hover:bg-[#4338CA]"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="rounded-b-[32px] py-3 text-center mt-2">
          <p className="text-[14px] text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="cursor-pointer font-medium text-[#4F46E5]"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};
