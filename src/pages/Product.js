import React, { useEffect, useState } from "react";
import "./styles/Product.css";

// components
import {
  Navbar,
  Container,
  Links,
  Header,
  Footer,
  Thumbnail,
  BasketIcon,
  Form1,
} from "../components";
import GlobalStyle from "../globalStyles";

// other
import { PageContainer } from "../globalStyles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import BrushIcon from "@material-ui/icons/Brush";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// redux
import { useSelector } from "react-redux";
import { selectProduct } from "../features/product/productSlice";

const Product = ({ notify }) => {
  const product = useSelector(selectProduct);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `https://birdbrain.herokuapp.com/products?id=${product}`
        );

        setData(res.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  console.log(data[0]);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Links />
      <PageContainer>
        {!loading ? (
          data?.map((p, idx) => (
            <>
              <div key={idx} className="product__container">
                <Header title={p.title} />

                <Carousel>
                  <div className="carousel__container">
                    <img className="carousel__img" src={p.image?.url} />
                  </div>
                  <div className="carousel__container">
                    <img className="carousel__img" src={p.image2?.url} />
                  </div>
                </Carousel>
                <div className="product__details">
                  <h2>£{p.price.toFixed(2)}</h2>
                  <p>{p.description}</p>
                  <div className="product__details__icons">
                    <FavoriteBorderIcon />
                    Handcrafted
                  </div>
                  <p>{p.stock} available</p>
                </div>
              </div>
              <div style={{ display: "grid", placeItems: "center" }}>
                <Form1
                  id={p.id}
                  title={p.title}
                  image1={p.image}
                  price={p.price}
                  setOpen={p.setOpen}
                  notify={notify}
                  formType={p.formType}
                  stock={p.stock}
                />
              </div>
            </>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>loading...</div>
        )}
      </PageContainer>
    </>
  );
};

export default Product;
