function setAmountToFixed(coinType) {
  return coinType
    ? coinType.toString().length > 4
      ? coinType.toFixed(2)
      : coinType
    : "error";
}

export function compareDates(a, b) {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}

export default {
  setAmountToFixed,
  compareDates,
};
