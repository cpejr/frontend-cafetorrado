import { setChartParams, saveMarks } from './RequestHandler/RequestHandler';

export default async function getChartParams(marks) {
  try {
    // eslint-disable-next-line no-alert
    const RoastName = prompt('Digite o nome da sua torra');
    const roastId = await setChartParams(RoastName);
    marks.forEach(async (mark) => {
      await saveMarks(mark, roastId);
    });

    return true;
  } catch (error) {
    return false;
  }
}
