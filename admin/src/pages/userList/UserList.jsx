import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useState} from "react";
import { useSelector } from "react-redux";
import Chart from "../../components/chart/Chart";

export default function UserList() {
  const { users, usersStats } = useSelector((state) => state.users);
  const { monthlyRegistrations, yearlyRegistrations } = usersStats;

  const [isMonthly, setIsMonthly] = useState(true);

  const toggleIsMonthly = (isMonthlyStatus) => {
    setIsMonthly(isMonthlyStatus);
  };
  const handleDelete = (id) => {
    //   setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "_id", headerName: "User ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {isMonthly ? (
        <Chart
          data={monthlyRegistrations}
          title="User Registrations"
          dataKey="registrations"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      ) : (
        <Chart
          data={yearlyRegistrations}
          title="User Registrations"
          dataKey="registrations"
          toggleIsMonthly={toggleIsMonthly}
          status={isMonthly}
        />
      )}

      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
