import React from "react";
import "./home.css";
import img1 from "../assets/jpg/c1.jpg";
import { Button, IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import {stock} from "../data/data"
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,addItem,deleteItem} from '../functions/functions'

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
  const cart = useSelector(state => state.cart.items);
  return (
    <div className="items">
      
      {stock.map((e) => {
         let isExists = false;
         
         if(cart.indexOf(e.id) > -1)
          isExists = true;
         return (<Item key={e.id} name= {e.name} price= {e.price} url={e.url} isExists={isExists}/>)
      }
      )}
    </div>
  );
}


function Item(props){
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    return(
        <div
        className="item-cont"
        onClick={(e) => {
          if(e.target.className === "MuiButton-label"){
            dispatch(addItem(props.key))
            dispatch(increment())
          }
        }}
      >
        <img src={props.url} />
        <div className="item-desc">
          <div className="itm-det">
            <p className="itm-nm">{props.name}</p>
            <p className="itm-pr">{"₹"+props.price}</p>
          </div>
          <div className="add">
            <Button color={!props.isExists ? "primary":"secondary"} variant="contained" disableElevation>
              {!props.isExists ? "Add to Cart":"Added"}
            </Button>
          </div>
        </div>
      </div>
    );
}
function ItemPopUp() {
  return false ? (
    <div>
      <div className="overlay">
        <div className="desc">
            <div className="close">
                <IconButton>
                    <CloseRounded/>
                </IconButton>
            </div>
          <div>
            <img src={img1} />
            <div className="itm-det-cart">
              <div className="itm-det">
                <p className="itm-nm">Name</p>
                <p className="itm-pr">Price</p>
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
                <p className="count">0</p>
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
          <p className="itm-nm">Vendor</p>
          <p className="itm-nm">Category</p>
          <p className="itm-nm">Description</p>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

function CartPopUp() {
    return false ? (
      <div>
        <div className="overlay">
          <div className="desc">
              <div className="close">
                  <IconButton>
                      <CloseRounded/>
                  </IconButton>
              </div>
            
            <div className="carts">
            <p className="itm-pr">Cart</p>
            <CartItems/>
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

  function CartItems(){
      return(
         <div>
              <div  className="cartitems">
                
                <CartItem/>
              </div>
              
         </div>
         
      );
  }

  function CartItem(){
    return(
       <div>
            <div  className="cartitem">
            <p className="itm-nm">Name</p>
            <p className="itm-nm">Price</p>
            <p className="itm-nm">Quantity</p>
            </div>
            
       </div>
       
    );
}

export default ItemList;
