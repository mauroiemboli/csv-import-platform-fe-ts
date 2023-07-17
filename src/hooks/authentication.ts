import { AuthenticationService } from "@Services/API/Authentication";
import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem('authToken');

                if (token) {
                    const response = await AuthenticationService.ValidateToken(token);

                    if (response.status === "success") {
                        setIsAuthenticated(true);
                        setUser(response.data.authUser);
                    } else {
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                }
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchAuthStatus();
    }, []);

    return { isAuthenticated, loading, user };
};