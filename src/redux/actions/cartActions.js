import Cookies from "js-cookie";
import {
  addItem,
  addItemFailed,
  addItemLoading,
  addItemSuccess,
  removeItem,
} from "../slices/cartSlice";

export const _createCart = (data) => {
  return (dispatch, getState) => {
    const { auth } = getState();
  };
};

export const _addItem = (data) => {
  return (dispatch, getState) => {
    const { auth, cart } = getState();

    dispatch(addItemLoading());

    try {
      const lineItems = cart.lineItems.map((item) => item);

      const newItem = { ...data, cartIndex: lineItems.length };
      lineItems.push(newItem);

      Cookies.set("cartData", JSON.stringify(lineItems));

      if (auth) {
      }

      dispatch(
        addItemSuccess({
          newItem,
          status: {
            loading: false,
            success: true,
            message: "Successfully added to cart.",
          },
        })
      );
    } catch (error) {
      dispatch(
        addItemFailed({
          errors: ["Failed to add item"],
        })
      );
    }
  };
};

export const _removeItem = (index) => {
  return (dispatch, getState) => {
    const { auth, cart } = getState();

    dispatch(removeItem({ ...cart, status: { loading: true } }));

    try {
      let lineItems = cart.lineItems.map((item) => item);

      lineItems.splice(index, 1);

      lineItems = lineItems.map((item, index) => {
        return { ...item, cartIndex: index };
      });

      Cookies.set("cartData", JSON.stringify(lineItems));

      if (auth) {
      }

      dispatch(
        removeItem({
          ...cart,
          lineItems,
          status: {
            loading: false,
            success: true,
          },
        })
      );
    } catch (error) {
      dispatch(
        removeItem({
          ...cart,
          status: {
            loading: false,
            success: false,
            error: "There is an error",
          },
        })
      );
    }

    console.log(Cookies.get("cartData"));
  };
};
