import { useEffect, useState } from "react";
import remove from "../../../../assets/icons/Group 43.svg";
import { CartResponse } from "src/services/api/cart/types";
import { url } from "src/services/request";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import {
  SubOneItem,
  addToCart,
  deleteItemToCart,
  getCartByIdU,
} from "src/store/cart/slice";

interface PropsTableBody {
  item: CartResponse;
}

export const TableBody: React.FC<PropsTableBody> = ({ item }) => {
  const [count, setCount] = useState(item.quantity);
  const dispatch = useAppDispatch();

  const addItemCart = (pid: number, quantity: number) => {
    dispatch(
      addToCart({
        sessionId: item.sessionId,
        productId: pid,
        quantity: quantity,
      })
    );
  };
  const incrementCount = () => {
    setCount(count + 1);
    addItemCart(item.productGetAll.productId, count);
  };

  useEffect(() => {
    setCount(item.quantity)
  },[item.quantity])

  const removeItem = async () => {
    const res = await dispatch(deleteItemToCart({ Id: Number(item.id) }));
    if (deleteItemToCart.fulfilled.match(res)) {
      dispatch(getCartByIdU({ uid: item.sessionId }));
    }
  };

  const reduceCount = () => {
    setCount((prev) => {
      prev = prev - 1;
      if (prev === 0) { 
        removeItem();
        return 0;
      } else {
        dispatch(
          SubOneItem({
            sessionId: item.sessionId,
            productId: item.productGetAll.productId,
            quantity: prev + 1,
          })
        );
        return prev;
      }
    });
  };

  return (
    <div className="table-cart-row">
      <div className="table-cart-col">
        <div className="product-info">
          <div className="product-info-image">
            <img
              src={`${url}Resources${item.productGetAll.image_Url}`}
              alt=""
            />
            <img src={remove} className="remove" onClick={removeItem}/>
          </div>
          <div className="product-info-content">
            <h5>{item.productGetAll.productName}</h5>
            <div className="category">
              {item.productGetAll.categories.map((item, index) => (
                <span key={index}>{item.categoryName}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="table-cart-col">
        <div className="price">
          <h5>{item.productGetAll.priceNew}</h5>
        </div>
      </div>
      <div className="table-cart-col">
        <div className="action">
          <button onClick={reduceCount}>-</button>
          <h5> {count}</h5>
          <button onClick={incrementCount}>+</button>
        </div>
      </div>
      <div className="table-cart-col">
        <div className="price">
          <h5>{count * item.productGetAll.priceNew}</h5>
        </div>
      </div>
    </div>
  );
};
