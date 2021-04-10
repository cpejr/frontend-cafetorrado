import { setChartParams } from '../RequestHandler/RequestHandler';

export default function getChartParams() {
  const RoastName = prompt('Digite o nome da sua torra');
  setChartParams(RoastName);
}
