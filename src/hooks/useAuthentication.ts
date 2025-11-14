import { useNavigate } from "react-router-dom";

const defaultCredentials = {
  "demo@example.com": "password123",
  "test@user.com": "testpass",
};

export const useAuthentication = () => {
  const navigate = useNavigate();

  const savedUsers =
    JSON.parse(localStorage.getItem("users") || "null") || defaultCredentials;

  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  const authenticate = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): string | null => {
    const trimmedUsername = username.trim();

    const userExists = savedUsers.hasOwnProperty(trimmedUsername);
    if (!userExists) {
      return "Invalid username or password";
    }

    if (savedUsers[trimmedUsername] !== password) {
      return "Invalid username or password";
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", trimmedUsername);
    navigate("/");
    return null;
  };

  const signup = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): string | null => {
    const trimmedUsername = username.trim();

    if (savedUsers.hasOwnProperty(trimmedUsername)) {
      return "User already exists";
    }

    const updatedUsers = {
      ...savedUsers,
      [trimmedUsername]: password,
    };

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", trimmedUsername);

    navigate("/");
    return null;
  };

  return {
    isAuthenticated,
    loggedInUser: localStorage.getItem("loggedInUser") ?? "",
    actions: {
      authenticate,
      signup,
    },
  };
};
