import React from "react";
import styled from "styled-components";
import { categories } from "../../Data";
import CategorieItem from "./CategorieItem";
import { mobile, mobile4, mobile6 } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    padding: "0px",
    flexDirection: "column",
  })}
  ${mobile4({
    padding: "0px",
    flexDirection: "column",
  })}
  ${mobile6({
    padding: "0px",
    flexDirection: "column",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
