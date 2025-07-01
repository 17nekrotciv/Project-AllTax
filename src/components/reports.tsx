import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
interface SalesReportProps {
  salesData: number[]
}

const SalesReport: React.FC<SalesReportProps> = ({ salesData }) => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales",
        data: salesData,
        fill: false,
        backgroundColor: "rgb(25, 118, 210)",
        borderColor: "rgba(25, 118, 210, 0.6)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Sales By Month for:",
        align: "start" as const,
        font: {
          size: 16,
        },
      },
    },
  }

  return (
    <div className="sales-report-container">
      <Line data={data} options={options} />
    </div>
  )
}

export default SalesReport
