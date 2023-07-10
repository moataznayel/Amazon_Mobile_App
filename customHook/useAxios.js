import { useState, useEffect } from "react";
import Instance from "../instanceAxios/instance";
const useAxios = (url, params) => {
  //store the all product by get api
  const [productsOrginal, setProductsOrginal] = useState([]);
  //store the all product by get api and result filter
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Instance.get(url)
      .then((res) => {
        setProductsOrginal(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (params !== undefined) {
      let filterByBrand = productsOrginal.filter((f) => f.brand === params);
      setProducts(filterByBrand);
    } else {
      setProducts(productsOrginal);
    }
  }, [params]);
  return { productsOrginal, products };
};
export default useAxios;
