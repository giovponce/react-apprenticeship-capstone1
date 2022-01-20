import React, { useState, useContext, useEffect, useCallback, createContext } from "react";
import { storage } from '../utils/storage';
import { AUTH_STORAGE_KEY } from '../utils/constants';


export const AuthContext = createContext('');

function useAuth() {
    return useContext(AuthContext);
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }){
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const lastAuthenticated = storage.get(AUTH_STORAGE_KEY);
        const isAuthenticated = Boolean(lastAuthenticated);

        setAuthenticated(isAuthenticated);
    }, []);

    const login = useCallback(() => {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
    }, []);

    const logout = useCallback(() => {
        setAuthenticated(false);
        localStorage.clear();
        storage.set(AUTH_STORAGE_KEY, false);
        window.location.reload();
    }, []);

    return (
        <AuthContext.Provider value={{login, logout, authenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth };


