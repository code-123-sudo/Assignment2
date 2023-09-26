import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../features/product/product.slice";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(clearState());
    navigate("/");
  };
  const [toggle, setToggle] = useState(false);

  const handleChange = (event) => {
    setToggle(event.target.checked);
    console.log(event.target.checked);
  };

  useEffect(() => {
    console.log(toggle);
  });
  return (
    <>
      <header className='header' id='header'>
      </header>
        <div className="topnav">
          <a className="active" href="#home">Recco</a>
          <a href="#news">Store</a>
          <a href="#contact">Order</a>
          <a href="#about">Analytics</a>
          <a className="cart" href="#cart">Cart</a>
          <a className="user" href="#cart">Hello James!</a>
        </div>
        <div className="nav2">
          <p className="cart" >Order ></p>
          <p className="user" >Order 32457ABC</p>
        </div>
        <div className="nav3">
          <p className="orderId" >Order 32457ABC</p>
          <div className="button1"><div className="button1p">Back</div></div>
          <div className="button2"><div className="button2p">Approve Order</div></div>
        </div>
    </>
  );
};

