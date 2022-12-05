import { useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateProduct, getProductStats } from "../../redux/apiCalls";

export default function Product() {
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = location.pathname.split("/")[2];

  const [isMonthly, setIsMonthly] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [inStock, setInStock] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(dispatch, { productId, title, desc, price, inStock });
  };

  const toggleIsMonthly = (isMonthlyStatus) => {
    setIsMonthly(isMonthlyStatus);
  };

  useEffect(() => {
    getProductStats(dispatch, productId);
    // eslint-disable-next-line
  }, [productId]);

  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const res = useSelector((state) => state.products.productStats);
  const { yearlySales, monthlySales } = res;
  const ys = yearlySales ? yearlySales[0].items : null;

  // let { yearlySales, monthlySales } = useSelector((state) => {
  //   console.log(state.products.productStats);
  //   return state.products.productStats;
  // });
  // yearlySales = yearlySales[0].items;

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        {/* <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link> */}
      </div>

      {/* <div className="productTop"> */}
      <div className="productTopRight">
        <div className="productInfoTop">
          <img src={product.img} alt="" className="productInfoImg" />
          <span className="productName">{product.title}</span>
        </div>
        <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{product._id}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">sales:</span>
            <span className="productInfoValue">5123</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">in stock:</span>
            <span className="productInfoValue">{product.inStock}</span>
          </div>
        </div>
      </div>

      {isMonthly ? (
        <Chart
          data={monthlySales}
          title="Sales"
          dataKey="itemQty"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      ) : (
        <Chart
          data={ys}
          title="Sales"
          dataKey="itemQty"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      )}
      {/* </div> */}

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder={product.desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder={product.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>In Stock</label>
            <select
              name="inStock"
              id="idStock"
              onChange={(e) => setInStock(e.target.value)}
            >
              <option value=""></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            {/* <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div> */}
            <button className="productButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
