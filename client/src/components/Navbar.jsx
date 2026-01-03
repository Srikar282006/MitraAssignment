import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import InputForm from "./InputForm";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const nav=useNavigate()
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [isOpen, authModal]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    nav(0)
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost text-xl">
            Home
          </NavLink>
        </div>

        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {!isLoggedIn ? (
                <>
                  <li>
                    <button
                      onClick={() => {
                        setAuthModal("login");
                        setIsOpen(true);
                      }}
                    >
                      Login
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setAuthModal("signup");
                        setIsOpen(true);
                      }}
                    >
                      Signup
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm mode={authModal} setIsOpen={setIsOpen} />
        </Modal>
      )}
    </>
  );
}
