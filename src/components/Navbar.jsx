import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import cover from "../../public/m.png";
import logo from "../../public/jn.png";

import Badge from "@mui/material/Badge";
import { mobile, mobile4, mobile6 } from "../Responsive";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 150px;
  background-image: url(${cover});
  background-size: cover;

  ${mobile({
    backgroundImage: "none",
    backgroundSize: "none",
    backgroundColor: "#f7f6f6",
    height: "50px",
    width: "100%",
  })};
  ${mobile4({
    backgroundImage: "none",
    backgroundSize: "none",
    backgroundColor: "#f7f6f6",
    height: "50px",
    width: "100%",
  })};
  ${mobile6({
    backgroundImage: "none",
    backgroundSize: "none",
    backgroundColor: "#f7f6f6",
    height: "50px",
    width: "100%",
  })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  ${mobile({
    padding: "10px 0px",
    alignItems: "center",
  })}
  ${mobile4({
    padding: "10px 0px",
    alignItems: "center",
  })}
  ${mobile6({
    padding: "10px 0px",
    alignItems: "center",
  })}
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${mobile({
    justifyContent: "center",
  })}
  ${mobile4({
    justifyContent: "center",
  })}  
  ${mobile6({
    justifyContent: "center",
  })}
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    justifyContent: "center",
    paddingLeft: "-130px",
  })}
  ${mobile4({
    justifyContent: "center",
    paddingLeft: "-130px",
  })}
  ${mobile6({
    justifyContent: "center",
  })}

  ${mobile6({
    "& img": {
      width: "120px",
      height: "auto",
      justifyContent: "center",
    },
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: "center",
  })}
  ${mobile4({
    flex: 2,
    justifyContent: "center",
  })}
  ${mobile6({
    flex: 2,
    justifyContent: "center",
  })}
`;
const Language = styled.div`
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  ${mobile({
    display: "none",
  })}
  ${mobile4({
    display: "none",
  })}
  ${mobile6({
    display: "none",
  })}
`;
const Jasmine = styled.h1`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 5px;
  cursor: pointer;
  font-family: "roseritta", sans-serif;
  color: #c79d6b;
  padding-left: 50px;
`;
const Jasmine2 = styled.h1`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  font-family: "roseritta", sans-serif;
  color: #c79d6b;
  padding-left: 20px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({
    height: "10px",
  })}
  ${mobile4({
    height: "10px",
  })}  
  ${mobile6({
    height: "10px",
  })}
`;
const Input = styled.input`
  border: none;
  background: none;

  &:focus {
    outline: none;
    border: none;
  }
  ${mobile({
    width: "50px",
  })}
  ${mobile4({
    width: "50px",
  })}
  ${mobile6({
    width: "50px",
  })}
`;
const Logo = styled.img`
  width: 100px;
  height: auto;

  ${mobile({
    width: "25px",
    height: "auto",
    justifyContent: "center",
  })}
  ${mobile4({
    width: "25px",
    height: "auto",
    justifyContent: "center",
  })}
  ${mobile6({
    width: "25px",
    height: "auto",
    justifyContent: "center",
  })}
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 600;

  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
  ${mobile4({
    fontSize: "12px",
    marginLeft: "10px",
  })}
  ${mobile6({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    persistor.purge(); // Clear persisted state upon logout
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>

        <Center>
          {windowWidth <= 510 && <Jasmine2>JASMINE.S</Jasmine2>}
          {windowWidth > 510 && windowWidth <= 950 && (
            <Jasmine>JASMINE.SHOPY</Jasmine>
          )}
          {windowWidth > 950 && <Logo src={logo} alt="Logo" />}
        </Center>
        <Right>
          {currentUser ? (
            // If user is logged in, show logout link
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/"
              onClick={handleLogout}
            >
              <MenuItem>Log Out</MenuItem>
            </Link>
          ) : (
            // If user is not logged in, show login and register links
            <>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                <MenuItem>Register</MenuItem>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <MenuItem>Sign In</MenuItem>
              </Link>
            </>
          )}
          {/* Always show cart link */}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
