import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const ProtectedRouter = ({ component, ...rest }) => {
    const hasToken = JSON.parse(localStorage.getItem('auth'));

    return (
        <Routes>
            <Route exact
                {...rest}
                element={hasToken !== null ? component : <Navigate to="/" />}
            />
        </Routes>

    );
};

export default ProtectedRouter;
