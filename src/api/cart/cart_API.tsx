import { path } from "../instance";
import { ProductsType } from "../../types/ProductsType";

export const addtoCart = (product: ProductsType) => {
  const url = "/cart";
  return path.post(url, product);
};

export const deleteCart = (id: ProductsType) => {
  const url = `/cart/${id}`;
  return path.delete(url);
};
