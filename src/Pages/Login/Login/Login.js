import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <h2>Please Log In Here </h2>
            <button onClick={signInUsingGoogle} className="btn btn-primary">Sign In With Google</button>
        </div>
    );
};

export default Login;