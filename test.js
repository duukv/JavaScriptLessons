function month(m = null) {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "okt",
    "nov",
    "dec",
  ];
  if (m == null) {
    const m = new Date().getMonth();
    return months[m];
  }
  return months[m - 1];
}
