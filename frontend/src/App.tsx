import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Add from "./Addproduct";

export type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  const [products, setProducts] = useState<Product[] | []>([]);
  useEffect(() => {
    const func = async () => {
      const { data } = await axios.get("/api/v1/users");
      console.log(data.users);
      setProducts(data.users);
    };

    func();
  }, []);

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={products.map((product) => (
        <Card
          key={product._id}
          title={product.title}
          discountPercentage={product.discountPercentage}
          thumbnail={product.thumbnail}
          price={product.price}
          rating={product.rating}
          stock={product.stock}
        />
      ))} />
      <Route path="/add" element={<Add/>} />
     
        </Routes>

      </Router>

    </>
  );
}

export default App;
