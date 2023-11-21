import { Button } from "antd";
import React from "react";
// import { Button, ButtonGroup } from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";
function Logout({ isLogged, setisLogged, WishlistState, setWishlistState }) {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate("/");
        setisLogged(false);
        localStorage.removeItem("WishlistLocal");
        localStorage.removeItem("searchedUserName");
        setWishlistState([]);
      }}
    >
      Log out
    </Button>
  );
}

export default Logout;
