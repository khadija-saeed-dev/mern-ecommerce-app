import React, { createContext, useEffect, useState } from "react";
// import all_product from '../Component/assets/all_product'
export const ShopContext = createContext(null)
const ShopContextProvider = (props) => {

    // make state variable to pull data fron backend:
    const [all_product, setAll_Product] = useState([]);
 
const [authToken, setAuthToken] = useState(localStorage.getItem("auth-token") || null);

    //   make useeffect to pull data from backend and store in "all_product" 
useEffect(() => {
         fetch("http://localhost:4000/allproducts")
            .then((responce) => responce.json()).then((data) => setAll_Product(data))

    // login wali property add on ho rahi hai index.js k no:14 wala route ka kam ho raha hai yahan

    if (authToken) {
        fetch('http://localhost:4000/getcart', {
            method: "POST",
            headers: {
                'auth-token': authToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => setcartItem(data))
        .catch(() => setcartItem(getDefaultCart()));
    } else {
        setcartItem(getDefaultCart()); // logout → cart zero
    }
}, [authToken]);


    // logout button cart pr zero show krwanay k liye 
    const logout = () => {
  localStorage.removeItem("auth-token");
  setcartItem(getDefaultCart());
};


// example login function
const login = (tokenFromBackend) => {
    localStorage.setItem("auth-token", tokenFromBackend);
    setAuthToken(tokenFromBackend); // triggers useEffect → fetch cart
};


  
    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < 300 + 1; index++) {
            cart[index] = 0;
        }
        return cart;
    }
    const [cartItem, setcartItem] = useState(getDefaultCart())


    const contaxtValue = { all_product, cartItem }
    //Add product to cart
    const addtoCart = (itemId) => {
        setcartItem((prev) => (
            { ...prev, [itemId]: prev[itemId] + 1 }))
        // 1st check the token in local storage is ka matlab hai we are logedin
        if (localStorage.getItem('auth-token')) {
            // if we are login we will update the " itemId" in mongodb
            fetch('http://localhost:4000/addtocart', {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'itemId': itemId
                })
            }).then((responce) => responce.json()).then((data) => console.log(data))
        }
    }
    //remove product from cart
    const removeFromCart = (itemId) => {
        setcartItem((prev) => (
            { ...prev, [itemId]: prev[itemId] - 1 }
        ))

        // remove the cart from database
        if (localStorage.getItem('auth-token')) {
            // if we are login we will update the " itemId" in mongodb
            fetch('http://localhost:4000/removefromcart ', {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'itemId': itemId
                })
            }).then((responce) => responce.json()).then((data) => console.log(data))
        }
    }
    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const id in cartItem) {
            if (cartItem[id] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(id))
                TotalAmount += itemInfo.new_price * cartItem[id]
            }

        }
        return TotalAmount;
    }
    const getTotalCartItem = () => {
        let totalItems = 0
        for (const items in cartItem) {
            if (cartItem[items] > 0) {
                totalItems += cartItem[items]
            }
        }
        return totalItems;
    }
    const ContextValue = { getTotalCartItem, getTotalCartAmount, all_product, cartItem, addtoCart, removeFromCart, setcartItem ,logout  };
    return <ShopContext.Provider value={ContextValue}>
        {props.children}

    </ShopContext.Provider>
}
export default ShopContextProvider;