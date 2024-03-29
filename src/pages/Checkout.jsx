import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import Checkoutcomponent from "../components/checkoutcomponent";

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Checkoutcomponent />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Checkout;
