import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import React, { useState } from "react";
import styled from "styled-components";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f6f6;
  height: 70vh;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex-direction: column;
`;
const Input = styled.input`
  border: none;
  height: 30px;
  width: 300px;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    desc: "",
    img: "",
    categories: [],
    size: [],
    color: [],
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is one of 'categories', 'size', or 'color'
    // and split the string by commas into an array
    if (["categories", "size", "color"].includes(name)) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value.split(",").map((item) => item.trim()), // Split by comma and trim whitespace
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userRequest.post("/products", product); // Make a POST request to your backend API
      // Optionally, you can redirect the user to a different page or display a success message
      console.log("Product added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="desc"
            placeholder="Description"
            value={product.desc}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="img"
            placeholder="Image URL"
            value={product.img}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="categories"
            placeholder="Categories (comma-separated)"
            value={product.categories.join(",")}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="size"
            placeholder="Sizes (comma-separated)"
            value={product.size.join(",")}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="color"
            placeholder="Colors (comma-separated)"
            value={product.color.join(",")}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            required
          />
          <Button type="submit">Add Product</Button>
        </Form>
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AddProduct;
