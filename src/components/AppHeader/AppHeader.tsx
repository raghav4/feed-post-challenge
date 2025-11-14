import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import { useAuthentication } from "../../hooks/useAuthentication";

export const AppHeader = () => {
  const { isAuthenticated } = useAuthentication();
  return (
    <header className="w-screen max-w-none bg-white py-4 px-6 relative left-1/2 right-1/2 -translate-x-1/2">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">foo-rum</div>

        {!isAuthenticated && (
          <Link
            to="/signin"
            className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Login
            <LogIn size={16} strokeWidth={1.8} />
          </Link>
        )}
      </div>
    </header>
  );
};
