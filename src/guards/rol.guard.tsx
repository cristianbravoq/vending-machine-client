// import { useSelector } from "react-redux";
// import { AppStore } from "../redux/store";
// import { Roles } from "../models";
// import { Navigate, Outlet } from "react-router-dom";

// interface Props {
//   rol: Roles;
// }

// function RolGuard({ rol }: Props) {
  // const userState = useSelector((store: AppStore) => store.user);
  // const rolAceptedValidationFragment = <Outlet />;
  // const rolDenegadeValidationFragment = <Navigate to="" />;

  // return userState.rol == rol
  //   ? rolAceptedValidationFragment
  //   : rolDenegadeValidationFragment;
// }
// export default RolGuard;