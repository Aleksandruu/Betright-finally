import { Outlet , Navigate } from 'react-router-dom';

export const PrivateRoute = () => {
  let auth = {'authToken': false}
  return (
    auth.Token ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoute