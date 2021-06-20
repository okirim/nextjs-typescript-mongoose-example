import React, {useContext} from 'react';
import authContext, {AuthContextInitialState} from './auth.context';

import {useState} from 'react';
import {IUser} from "../../../app/types/app.types";

interface AuthProviderProps {
    children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const [authUser, setAuthUser] = useState<IUser | null>(null)

    function HandleLogin<T extends IUser>(user: T) {
        setAuthUser(user);
    }

    function HandleLogOut() {
        setAuthUser(null);
    }
    
    return (
        <authContext.Provider value={{
            authUser,
            login:HandleLogin,
            logout:HandleLogOut
        }}>
            {props.children}
        </authContext.Provider>
    );
}

export default AuthProvider;