export function activeDay() {
  const friday = new Date(2019, 5, 17);
  const saturday = new Date(2019, 5, 18);
  const sunday = new Date(2019, 5, 19);

  const today = new Date();

  if (friday.getTime() > today.getTime()) {
    return 0;
  } if (saturday.getTime() > today.getTime()) {
    return 1;
  } if (sunday.getTime() > today.getTime()) {
    return 2;
  }
  return 0;
}
