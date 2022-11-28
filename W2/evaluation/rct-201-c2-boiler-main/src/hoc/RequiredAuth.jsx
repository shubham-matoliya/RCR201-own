import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { pathname } = useLocation();
  const { isAuthenticated, token } = useSelector(
    (store) => store.authManager.data
  );
  if (isAuthenticated) return children;
  else {
    return (
      // Redirecting to Login page
      <Navigate
        to="/login"
        state={{ from: pathname }}
        replace
        // spacer
      />
    );
  }
};

export default RequiredAuth;
