export function getAliasByName(name, id) {
  return name.replace(/ /g, "-").toLowerCase() + "-" + id.slice(0, 5);
}

export function formatDate(isoString) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(isoString);
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month}, ${day}`;
}

export default function removeWhiteSpace(str) {
  return str.replace(/\s/g, "");
}

export function getScoreColor(score) {
  if (score < 40) {
    return "red";
  } else if (score >= 80) {
    return "green";
  } else {
    return "orange";
  }
}
