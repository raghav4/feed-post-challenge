import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "./useAuthentication";

export const useInteraction = (ref: React.RefObject<HTMLElement | null>) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthentication();

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const element = ref.current;

    const onClick = () => {
      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    element.addEventListener("click", onClick);

    return () => {
      element.removeEventListener("click", onClick);
    };
  }, [ref, navigate, isAuthenticated]);
};
