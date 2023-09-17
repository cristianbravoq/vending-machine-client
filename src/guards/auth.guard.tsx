import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../routes/routes";

interface Props {
  privateValidation: Boolean;
}

const privateValidationFragment = <Outlet />;
const publicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name
    ? privateValidation
      ? privateValidationFragment
      : publicValidationFragment
    : <Navigate replace to={PublicRoutes.LOGIN} />;;
};

export default AuthGuard;
