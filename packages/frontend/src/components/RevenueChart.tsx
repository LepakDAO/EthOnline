import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from 'chart.js'
import Chart from 'chart.js/auto'
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)

const labels = ['Sept 28', 'Oct 05', 'Oct 12', 'Oct 19', 'Oct 26', 'Nov 03', 'Nov 10']

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: '#6868B4',
      borderColor: '#6868B4',
      data: [0, 10, 5, 2, 20, 30, 45],
      fill: false,
      lineTension: 0.1,
      pointBorderColor: '#6868B4',
      pointBackgroundColor: '#6868B4',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#6868B4',
      pointHoverBorderColor: '#6868B4',
      pointHoverBorderWidth: 10,
      pointRadius: 1,
      pointHitRadius: 10,
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

export const RevenueChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  )
}

const Wrapper = styled.div``
