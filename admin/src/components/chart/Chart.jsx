import "./chart.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

export default function Chart({
  title,
  data,
  dataKey,
  grid,
  toggleIsMonthly,
  status,
}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>

      <div className="togglerContainer">
        <button
          className="toggler"
          type="button"
          onClick={() => toggleIsMonthly(!status)}
        >
          {status ? `View Annual ${title}` : `View Monthly ${title}`}
        </button>
      </div>
      
      <ResponsiveContainer width="100%" height={300} aspect={4 / 1}>
        <AreaChart
          data={data}
          margin={{
            top: 50,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke="#2cb1bc"
            fill="#bef8fd"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
