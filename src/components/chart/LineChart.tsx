import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

export const LineChart = () => {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
  );
  return (
    <>
      <Line
        datasetIdKey="id"
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              label: 'dd',
              data: [5, 6, 7],
            },
            {
              label: 'aa',
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </>
  );
};
