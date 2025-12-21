import { useDispatch } from "react-redux";
import { addToBasket } from "../redux/slices/basketSlice";
import { toast } from "react-toastify";

export default function useAddToBasket() {
  const dispatch = useDispatch();

  const addProduct = (product, quantity = 1) => {
    const payload = {
      id: Number(product.id),
      price: product.price,
      image: product.image,
      title: product.title,
      category: product.category,
      rating: product.rating,
      description: product.description,
      quantity,
    };

    dispatch(addToBasket(payload));

    toast.success("Ürün sepete eklendi 🛒", {
      autoClose: 2000,
    });
  };

  return addProduct;
}
