import "./Productbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clearState } from "../../features/product/product.slice";

export const Productbar = () => {
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
          <a href="#Store">Store</a>
          <a href="#Order">Order</a>
          <a href="#Analytics">Analytics</a>
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
        <br/>
        <br/>
        <div className="nav4">
          <div className="nav4div1">
            <div className="nav4div1Child">
              <div className="subHeading1">
                Supplier
              </div>
              <div className="subHeading2">
                East Coast Fruits and Vegetables
              </div>
            </div>
          </div>
          <div className="nav4div2">
            <div className="nav4div2Child">
              <div className="subHeading1">
                Shipping Date
              </div>
              <div className="subHeading2">
                Thus, Feb 10
              </div>
            </div>
          </div>
          <div className="nav4div3">
            <div className="nav4div3Child">
              <div className="subHeading1">
                Total
              </div>
              <div className="subHeading2">
                $ 15028.3
              </div>
            </div>
          </div>
          <div className="nav4div4">
            <div className="nav4div4Child">
             <div className="subHeading1">
                 Category
              </div>
              <div className="subHeading2">
                 icons
              </div>
            </div>
          </div>
          <div className="nav4div5">
            <div className="nav4div5Child">
              <div className="subHeading1">
                Department
              </div>
              <div className="subHeading2">
                300-444-678
              </div>
            </div>
          </div>
          <div className="nav4div6">
            <div className="nav4div6Child">
              <div className="subHeading1">
                Status
              </div>
              <div className="subHeading2">
                Awaiting your Approval
              </div>
            </div>
          </div>
        </div>
  <table>
  <tr>
    <th>Product Name</th>
    <th>Brand</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  <tr>
  <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  <tr>
    <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  <tr>
    <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  <tr>
   <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  <tr>
    <td>Chicken Breast Fillets, Boneless matuu maMarinated, 6 ounce Raw, invivid</td>
    <td>Hormel Black, Label Many</td>
    <td>$60.67 / 6 * 1 lb</td>
    <td>0*6 + 1lb</td>
    <td>0</td>
    <td>right wrong edit</td>
  </tr>
  </table>
    </>
  );
};

