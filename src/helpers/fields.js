export default function fieldsData(obj, fields) {
  let objNew = {};

  fields.map((field) => {
    if (obj[field]) {
      objNew[field] = obj[field];
    }
  });
  return objNew;
}
