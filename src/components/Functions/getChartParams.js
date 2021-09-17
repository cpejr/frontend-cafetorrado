import { setChartParams } from './RequestHandler/RequestHandler';
import saveMarks from './RequestHandler/SaveMarks';

export default function getChartParams(marks) {
  const RoastName = prompt('Digite o nome da sua torra');
  setChartParams(RoastName);

  marks.forEach(async (mark) => {
    await saveMarks(mark);
  });
}
