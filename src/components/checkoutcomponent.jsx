import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import Logo from "../../public/pp.png";
import { useForm, ValidationError } from "@formspree/react";
import { useSelector } from "react-redux";
import { removeAllProducts } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 150vh;
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
const Checkoutcomponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = (((cart.total + 6) * 100) / 100).toFixed(2);
  console.log(cart);
  console.log(`the Total price is ${totalPrice}`);

  const [state, handleSubmit] = useForm("mdoqzrwr");
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    if (state.succeeded) {
      // Show message for 5 seconds
      setTimeout(() => {
        setShowMessage(true);
        // After 5 seconds, navigate and dispatch action
        setTimeout(() => {
          navigate("/");
          dispatch(removeAllProducts());
        }, 5000);
      }, 0);
    }
  }, [state.succeeded, dispatch]);

  if (showMessage) {
    return <p>Thanks for joining!</p>;
  }

  // Extracting necessary information from the cart
  const cartInfo = cart.products.map((product) => ({
    name: product.title,
    quantity: product.quantity,
    color: product.color,
  }));

  // Stringify the cartInfo
  const cartInfoString = JSON.stringify(cartInfo);
  console.log(cartInfoString);

  return (
    <Container>
      <Wrapper>
        <Title>Check Out</Title>
        <form onSubmit={handleSubmit}>
          <Input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Prénom *"
            required
          />
          <ValidationError
            prefix="FirstName"
            field="firstname"
            errors={state.errors}
          />
          <Input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Nom *"
            required
          />
          <ValidationError
            prefix="LastName"
            field="lastname"
            errors={state.errors}
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <Input
            id="confirm_email"
            type="email"
            name="confirm_email"
            placeholder="Confirmez votre e-mail *"
            required
          />
          <ValidationError
            prefix="Confirm Email"
            field="confirm_email"
            errors={state.errors}
          />
          <Input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Téléphone *"
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          <Input
            id="address"
            type="text"
            name="address"
            placeholder="Adresse *"
            required
          />
          <ValidationError
            prefix="Phone"
            field="address"
            errors={state.errors}
          />
          <Input
            id="address2"
            type="text"
            name="address2"
            placeholder="Complément d'adresse"
          />
          <ValidationError
            prefix="Phone"
            field="address2"
            errors={state.errors}
          />
          <Input
            id="city"
            type="text"
            name="city"
            placeholder="Ville *"
            required
          />
          <ValidationError prefix="Phone" field="city" errors={state.errors} />
          <Input
            id="zip"
            type="text"
            name="zip"
            placeholder="Zip / code postal *"
            required
          />
          <ValidationError prefix="Phone" field="zip" errors={state.errors} />
          <Input
            id="country"
            type="text"
            name="country"
            placeholder="Pays *"
            required
          />
          <ValidationError
            prefix="Phone"
            field="country"
            errors={state.errors}
          />
          {/* Add hidden input to include cart information */}
          <div style={{ display: "none" }}>
            {cart.products.map((product, index) => (
              <React.Fragment key={index}>
                <input
                  type="hidden"
                  name={`ProductInformation${index}`}
                  value={`I would like to purchase ${product.quantity} units of ${product.title} in the color ${product.color}`}
                />
              </React.Fragment>
            ))}
          </div>
          <input
            type="hidden"
            name="totalPrice"
            value={`The Total Price is ${totalPrice}`}
          />

          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </Wrapper>
      <Image src={Logo} alt="" />
    </Container>
  );
};

export default Checkoutcomponent;
