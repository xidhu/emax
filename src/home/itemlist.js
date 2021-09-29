import React from "react";
import "./home.css";
import img1 from "../assets/jpg/c1.jpg";
import { Button } from "@material-ui/core";


function ItemList() {
  return (
    <div className="itemlist">
      <h1>Top Picks</h1>
      <hr></hr>
      <Items />
    </div>
  );
}

function Items() {
  return (
    <div className="items">
      <div
        className="item-cont"
        onClick={(e) => {
          alert(e);
        }}
      >
        <img src={img1} />
        <div className="item-desc">
          <div className="itm-det">
            <p className="itm-nm">Name</p>
            <p className="itm-pr">Price</p>
          </div>
          <div className="add">
            <Button color="primary" variant="contained" disableElevation>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div
        className="item-cont"
        onClick={(e) => {
          alert(e);
        }}
      >
        <img src={img1} />
        <div className="item-desc">
          <div className="itm-det">
            <p className="itm-nm">Name</p>
            <p className="itm-pr">Price</p>
          </div>
          <div className="add">
            <Button color="primary" variant="contained" disableElevation>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div
        className="item-cont"
        onClick={(e) => {
          alert(e);
        }}
      >
        <img src={img1} />
        <div className="item-desc">
          <div className="itm-det">
            <p className="itm-nm">Name</p>
            <p className="itm-pr">Price</p>
          </div>
          <div className="add">
            <Button color="primary" variant="contained" disableElevation>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
