import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import AuthService from "../utils/auth";

export default function ProtectedRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.loggedIn()) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
