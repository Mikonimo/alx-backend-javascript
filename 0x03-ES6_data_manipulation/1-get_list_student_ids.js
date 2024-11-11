export default function getListStudentIds(objs) {
  if (Array.isArray(objs)) {
    return objs.map((objs) => objs.id);
  }

  return [];
}
