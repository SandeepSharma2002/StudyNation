import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({isLoggedIn,children}) {
    console.log(isLoggedIn);
  if (isLoggedIn) {
    return children;
  }
  else return <Navigate to = "/login"/>;
}
