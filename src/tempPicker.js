function getTempType(temp) {
  if (temp > 26) {
    return "veryHot";
  } else if (temp >= 21) {
    return "hot";
  } else if (temp >= 15) {
    return "bitHot";
  } else if (temp >= 10) {
    return "neutral";
  } else if (temp >= 0) {
    return "cold";
  } else {
    return "veryCold";
  }
}

export default getTempType;
