import React from "react";
import "./home.css";
import img1 from "../assets/jpg/c1.jpg";
import { Button, IconButton } from "@material-ui/core";
import { CloseRounded, Satellite } from "@material-ui/icons";
import { stock } from "../data/data";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  addItem,
  deleteItem,
  openTab,
  closeTab,
  closeCart
} from "../functions/functions";

function ItemList() {
  return (
    <div>
      <ItemPopUp />
      <CartPopUp />
      <h1>Top Picks</h1>
      <hr></hr>
      <Items />
    </div>
  );
}

function Items() {
  return (
    <div className="items">
      {stock.map((e, i) => {
        return <Item key={i} data={e} />;
      })}
    </div>
  );
}

function Item(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let isExists = false;
  if (state.cart.items.indexOf(props.data.id) > -1) isExists = true;
  return (
    <div
      className="item-cont"
      onClick={(e) => {
        if (
          e.target.className === "MuiButton-label" &&
          !isExists &&
          props.data.available
        ) {
          dispatch(addItem(props.data.id));
          dispatch(increment());
        } else {
          dispatch(openTab(props.data));
        }
      }}
    >
      <img src={props.data.url} />
      <div className="item-desc">
        <div className="itm-det">
          <p className="itm-nm">{props.data.name}</p>
          <p className="itm-pr">{"₹" + props.data.price}</p>
        </div>
        <div className="add">
          <Button
            color={
              !props.data.available ? "" : !isExists ? "primary" : "secondary"
            }
            variant="contained"
            disableElevation
          >
            {!props.data.available
              ? "Out Of Stock"
              : !isExists
              ? "Add to Cart"
              : "Added"}
          </Button>
        </div>
      </div>
    </div>
  );
}
function ItemPopUp() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return state.detailsTab ? (
    <div>
      <div className="overlay">
        <div className="desc">
          <div className="close">
            <IconButton
              onClick={() => {
                dispatch(closeTab());
              }}
            >
              <CloseRounded />
            </IconButton>
          </div>
          <div>
            <img src={state.currentItem.url} className="det_img" />
            <div className="itm-det-cart">
              <div className="itm-det">
                <p className="itm-nm">{state.currentItem.name}</p>
                <p className="itm-pr">{"₹" + state.currentItem.price}</p>
              </div>
              <div className="add">
                <div className="minus">
                  <Button
                    color="secondary"
                    variant="contained"
                    disableElevation
                  >
                    -
                  </Button>
                </div>
                <p className="count">{state.currentCnt}</p>
                <div className="minus">
                  <Button
                    color="secondary"
                    variant="contained"
                    disableElevation
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className="itm-nm">{state.currentItem.vendor}</p>
          <p className="itm-nm">{state.currentItem.category}</p>
          <p className="itm-nm">{state.currentItem.desc}</p>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

function CartPopUp(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return state.cartTab ? (
    <div>
      <div className="overlay">
        <div className="desc">
          <div className="close">
            <IconButton onClick={()=>dispatch(closeCart())}>
              <CloseRounded />
            </IconButton>
          </div>

          <div className="carts">
            <p className="itm-pr">Cart</p>
            <CartItems />
            <div className="total">
              <p className="itm-nm">Total</p>
              <p className="itm-pr">1200/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

function CartItems() {
  return (
    <div>
      <div className="cartitems">
        <CartItem />
      </div>
    </div>
  );
}

function CartItem() {
  return (
    <div>
      <div className="cartitem">
        <p className="itm-nm">Name</p>
        <p className="itm-nm">Price</p>
        <p className="itm-nm">Quantity</p>
      </div>
    </div>
  );
}

export default ItemList;
