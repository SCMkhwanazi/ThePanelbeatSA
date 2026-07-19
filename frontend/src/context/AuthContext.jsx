import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, []);

    const login = (userData) => {

        localStorage.setItem("user", JSON.stringify(userData));

        setUser(userData);

    };

    const logout = () => {

        localStorage.removeItem("user");

        setUser(null);

    };

    return (

        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}
/**Imagine the user logs in.

Every page needs to know:

Is the user logged in?
What's their name?
Are they an admin?

Instead of asking the server repeatedly, React Context stores that information so any component can access it. */