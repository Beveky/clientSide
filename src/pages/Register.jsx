import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";
import { mobile } from "../Responsive";
import Logo from "../../public/pp.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
    url("../../public/g2.png") center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  ${mobile({
    width: "75%",
  })}
`;
const Image = styled.img`
  ${mobile({ width: "200px" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  outline: none;
  border: 1px solid grey;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #181818;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://backend-side-hy4a.vercel.app/api/auth/register",
        formData
      );
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err.response.data); // Log any errors
      // Optionally, display an error message to the user
    }
  };
  return (
    <Container>
      <Image src={Logo} alt="" />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <form
          style={{ display: "flex", flexWrap: "wrap" }}
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Register;
