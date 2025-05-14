import { useEffect } from "react";
import useUserStore from "../Zustand/UserStore";
import { getToken, parseJwt } from "../utills/auth";


const useAuth = () => {
  const { setUser } = useUserStore();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decoded = parseJwt(token);
      if (decoded?.userId) {
        setUser(decoded.userId);
      }
    }
  }, [setUser]);

  return useUserStore((state) => state.user);
};

export default useAuth;
