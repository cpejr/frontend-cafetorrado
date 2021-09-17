import { mark } from '../../../Pages/ResultsRevision/index';

export default async function getChartParams() {
  const markParams = {
    mark_name: mark,
  };
  const responseSaveMark = await api.post(`/saveMark/${roast_id}`, markParams);
}
