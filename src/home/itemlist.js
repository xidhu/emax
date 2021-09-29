import React from "react";
import "./home.css";
import img1 from "../assets/jpg/c1.jpg";
import { Button, IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";
import {stock} from "../data/data"
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,addItem,deleteItem,openTab,closeTab} from '../functions/functions'

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
      
      {stock.map((e,i) => {
         return (<Item key={i} id={e.id} name= {e.name} price= {e.price} url={e.url}/>)
      }
      )}
    </div>
  );
}


function Item(props){
    const state = useSelector(state => state);
    console.log(state)
    const dispatch = useDispatch();
    let isExists = false
    if(state.cart.items.indexOf(props.id) > -1)
          isExists = true
    return(
        <div
        className="item-cont"
        onClick={(e) => {
          if(e.target.className === "MuiButton-label" && !isExists){
            dispatch(addItem(props.id))
            dispatch(increment())
          
          }else{
            
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
            <Button color={!isExists ? "primary":"secondary"} variant="contained" disableElevation>
              {!isExists ? "Add to Cart":"Added"}
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

function CartPopUp(props) {
    return false? (
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
