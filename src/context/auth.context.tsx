"use client";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import Cookies from "js-cookie";

// Define a User interface (you can expand this based on your actual user data)
interface User {
  id: string;
  fullName: string;
  email: string;
  role: "USER" | "ADMIN"; // or use an enum if you have one
}

// Define the shape of the AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  logout: () => void;
}

const initialValue: AuthContextType = {
  isAuthenticated: false,
  user: null,
  setUser: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => !!Cookies.get("access_token")
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser && !user) {
      try {
        const parsedUser: User = JSON.parse(localUser);
        setUser(parsedUser);
      } catch (err) {
        console.error("Failed to parse user from localStorage", err);
      }
    }

    setIsAuthenticated(!!Cookies.get("access_token"));
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    Cookies.remove("access_token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setUser, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Custom hook with proper type guard
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
