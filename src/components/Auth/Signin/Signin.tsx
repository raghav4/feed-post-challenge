import { LogIn } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useAuthentication } from "../../../hooks/useAuthentication";
import { Navigate, useNavigate } from "react-router-dom";

export const Signin = () => {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const auth = useAuthentication();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);

  if (auth.isAuthenticated) {
    return <Navigate to="/" />;
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const username = (formData.get("username") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    const err = auth.actions.authenticate({ username, password });

    if (err) {
      setError(err);
      return;
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[520px] flex flex-col rounded-[32px] bg-[#F6F6F7] p-2.5">
        <div
          role="dialog"
          aria-modal="true"
          className="bg-white px-12 pt-12 pb-8 shadow-[0_18px_48px_rgba(0,0,0,0.06)] rounded-[24px]"
        >
          <div className="mx-auto mb-8 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#F5F7FA]">
            <LogIn className="h-7 w-7 text-[#444]" strokeWidth={2} />
          </div>

          <h2 className="mb-1 text-center text-[22px] font-semibold text-[#1C1C1E]">
            Sign in to continue
          </h2>

          <p className="mb-8 text-center text-[15px] text-gray-500">
            Sign in to access all the features on this app
          </p>

          <form className="space-y-5" onSubmit={onSubmit}>
            {error && (
              <div className="text-red-600 bg-red-100 border border-red-200 p-2 rounded text-sm">
                {error}
              </div>
            )}

            <div>
              <label
                className="mb-2 block text-[14px] font-medium"
                htmlFor="username"
              >
                Email or username
              </label>
              <input
                name="username"
                id="username"
                type="email"
                placeholder="Enter your email or username"
                className="w-full h-[48px] rounded-xl bg-[#F4F4F5] px-4 text-[15px]"
              />
            </div>

            <div>
              <label
                className="mb-2 block text-[14px] font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full h-[48px] rounded-xl bg-[#F4F4F5] px-4 text-[15px]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[48px] rounded-[12px] bg-[#4F46E5] text-[15px] font-medium text-white hover:bg-[#4338CA]"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="rounded-b-[32px] py-3 mt-2 text-center">
          <p className="text-[14px] text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-medium text-[#4F46E5]"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};
