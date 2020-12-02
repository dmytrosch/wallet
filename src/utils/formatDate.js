export default function formatDate(date) {
  const arr = date.split("-");
  return `${arr[2]}.${arr[1]}.${arr[0]}`;
}
