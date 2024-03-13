import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Card from "react-bootstrap/Card";
// import ProductImg from "../../../../assets/image/product.png";
import Ratings from "../../../../assets/image/stars.png";
import "./product.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/products?page=1&limit=10");
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const displayedProducts = products.slice(0, 12);
  return (
    <div className="container">
      <div className="title" style={{ marginBottom: 30 }}>
        <h1 style={{ fontWeight: "bold" }}>New</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#9B9B9B" }}>You’ve never seen it before!</span>
          <Link
            to={"/newproduct"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span style={{ color: " #db3022", fontWeight: "bold" }}>
              View All
            </span>
          </Link>
        </div>
      </div>
      <div className="row">
        {displayedProducts.map((item) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4 cardWrap"
            key={item.ID}
          >
            <div
              className="border rounded product"
              // onClick={() => handleProductClick(item.id)}
            >
              <img
                className="img-fluid"
                src={item.ImageUrl}
                alt="cloth"
                style={{
                  width: "100%",
                  maxHeight: "136px",
                  objectFit: "cover",
                }}
              />
              <div className="p-2">
                <h5
                  className="card-title mt-2"
                  style={{ fontSize: "16px", height: 50 }}
                >
                  {item.Name}
                </h5>
                <h5 className="text-danger fw-bold">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(item.Price)}
                </h5>
                <p style={{ color: "#9B9B9B" }}>{item.Condition}</p>
                <img src={Ratings} alt="stars" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
