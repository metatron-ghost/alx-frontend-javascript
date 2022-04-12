export default function getStudentsByLocation(lst, city) {
  return lst.filter((ojb) => ojb.location === city);
}
