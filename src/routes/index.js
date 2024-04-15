import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React                     from 'react';

import AppRoutes from "./Approutes";

import { Consumer } from '../store';

export default () => (
  <Consumer>
    {({ language }) => (
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, type, ...rest } = route;
            return <Route key={index}  {...rest} element={type === "public" ? element : <Navigate to="/"  animate={true} /> }  />;
          })}
        </Routes>
      </BrowserRouter>
    )}
  </Consumer>
)
