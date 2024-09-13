import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const handleToken = () => {
      const token = localStorage.getItem("jwtToken");
      if (token != null) {
        setLoggedIn(true);
      }
    };
    handleToken();
  }, [isLoggedIn]);

  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    setLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <Navbar>
      <NavbarBrand>
        <button
          className="font-bold font-sfpro font-bold"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          NEWSLETTER SERVICE by KARAKOC
        </button>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link to="/features" className="text-foreground">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      {!isLoggedIn && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login">
              <Button color="warning" variant="ghost">
                Login
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} to="/register" color="warning" variant="ghost">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      {isLoggedIn && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button
              as={Link}
              to="/profile"
              color="primary"
              className="bg-black text-white"
              variant="flat"
            >
              Profile
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              onPress={handleLogOut}
              color="primary"
              className="bg-black text-white"
              variant="flat"
            >
              Logout
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
    </Navbar>
  );
}
