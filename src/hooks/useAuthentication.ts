import { useNavigate } from "react-router-dom";

const credentials = {
  "demo@example.com": "password123",
  "test@user.com": "testpass",
};

export const useAuthentication = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";

  const authenticate = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const trimmedUsername = username.trim() as keyof typeof credentials;
    const user = credentials.hasOwnProperty(trimmedUsername);

    if (!user) {
      alert("Invalid username or password");
      return;
    }
    const userPassword = credentials[trimmedUsername];

    if (password !== userPassword) {
      alert("Invalid username or password");
    }

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return {
    isAuthenticated,
    actions: {
      authenticate,
    },
  };
};
