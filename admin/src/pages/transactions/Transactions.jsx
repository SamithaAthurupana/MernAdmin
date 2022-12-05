import "./transactions.css";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersStats,
} from "../../redux/apiCalls";
import Chart from "../../components/chart/Chart";

export default function Transactions() {
  const dispatch = useDispatch();
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleIsMonthly = (isMonthlyStatus) => {
    setIsMonthly(isMonthlyStatus);
  };

  useEffect(() => {
    getOrdersStats(dispatch);
    // eslint-disable-next-line
  }, []);

  const orders = useSelector((state) => state.orders.orders);
  const { yearlyTransactions, monthlyTransactions } = useSelector(
    (state) => state.orders.ordersStats
  );

  // const handleDelete = (id) => {
  //   // deleteProduct(id, dispatch);
  // };

  const columns = [
    // { field: "_id", headerName: "Order ID", width: 220 },
    {
      field: "_id",
      headerName: "Order ID",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row._id}</div>;
      },
    },
    {
      field: "customerId",
      headerName: "Customer ID",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.customerId}</div>;
      },
    },
    {
      field: "productId",
      headerName: "Product ID",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.products[0].productId}
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Qty",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.products[0].quantity}
          </div>
        );
      },
    },
    { field: "subtotal", headerName: "Sub Total", width: 150 },
    { field: "total", headerName: "Total", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 200 },

    // { field: "inStock", headerName: "Stock", width: 200 },
    // {
    //   field: "price",
    //   headerName: "Price",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.row._id}>
    //           <button className="productListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row._id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="productList">
      {isMonthly ? (
        <Chart
          data={monthlyTransactions}
          title="Transactions"
          dataKey="sales"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      ) : (
        <Chart
          data={yearlyTransactions}
          title="Transactions"
          dataKey="sales"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      )}

      <DataGrid
        rows={orders}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
