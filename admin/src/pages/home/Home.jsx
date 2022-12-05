import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Chart from "../../components/chart/Chart";
import {
  getOrders,
  getProducts,
  getAllUsers,
  getUsersStats,
} from "../../redux/apiCalls";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleIsMonthly = (isMonthlyStatus) => {
    setIsMonthly(isMonthlyStatus);
  };

  useEffect(() => {
    getAllUsers(dispatch);
    getProducts(dispatch);
    getOrders(dispatch);
    getUsersStats(dispatch);
    // eslint-disable-next-line
  }, []);


  const { monthlyRegistrations, yearlyRegistrations } = useSelector(
    (state) => state.users.usersStats
  );

  return (
    <div className="home">
      <FeaturedInfo />
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

      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
