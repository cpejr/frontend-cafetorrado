export default async function saveMarks(mark) {
  const markParams = {
    mark_name: mark,
  };
  await api.post(`/saveMark/${roast_id}`, markParams);
}
