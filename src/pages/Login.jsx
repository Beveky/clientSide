import styled from "styled-components";
import { mobile } from "../Responsive";
import Logo from "../../public/pp.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { loginStart, loginSuccess, loginFailure } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url("../../public/g.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  ${mobile({ width: "200px" })}
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  ${mobile({
    width: "75%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;
  border: 1px solid lightgrey;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #181818;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  // Handle login click
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  // Clear error state when component unmounts or navigates away
  useEffect(() => {
    return () => {
      dispatch(loginFailure(false)); // Reset error state
    };
  }, [dispatch]);

  return (
    <Container>
      <Image src={Logo} alt="" />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error ? <Error>Something went wrong...</Error> : false}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link >CREATE A NEW ACCOUNT</Link>
          <h4>Test Admin Acc:</h4>
          <p>UserName: beveky</p>
          <p>PassWord: 123456</p>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
