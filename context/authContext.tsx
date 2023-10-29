import LoadingTemplate from "@/components/template/loadingTemplate";
import AuthService from "@/services/auth.service";
import TokenService from "@/services/token.service";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useEffect, useState } from "react";

type AuthContextType = {
  login: (email: string, password: string) => void;
  logout: () => void;
  userId?: string;
};
const defaultContext: AuthContextType = {
  login: () => {},
  logout: () => {},
};
export const AuthContext = createContext<AuthContextType>(defaultContext);
export const AuthContextProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  const router = useRouter();
  const path = usePathname();
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login({ username: email, password });
      TokenService.updateToken(response.accessToken);
      TokenService.updateRefreshToken(response.refreshToken);
      setUserId(response.userId);
      router.push("/");
    } catch (error) {}
  };

  const logout = useCallback(() => {
    TokenService.removeToken();
    TokenService.removeRefreshToken();
    setUserId(undefined);
    router.push("/login");
  }, [router]);

  useEffect(() => {
    setIsLoading(true);
    if (path.includes("logout")) {
      logout();
      return;
    }
    if (path.includes("login") || path.includes("signup")) {
      setIsLoading(false);
      return;
    }
    if (!TokenService.hasToken() || !TokenService.hasRefreshToken()) {
      router.push("/login");
      return;
    }
    setIsLoading(false);
  }, [logout, path, router]);

  if (!isLoading) {
    return (
      <AuthContext.Provider value={{ ...defaultContext, login, userId }}>
        {children}
      </AuthContext.Provider>
    );
  }
  return <LoadingTemplate />;
};
