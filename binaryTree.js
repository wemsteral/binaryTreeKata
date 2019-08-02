const solution = arr => {
  var leftHS = [1];
  var rightHS = [2];
  var totalLH = 0;
  var totalRH = 0;

  for (i = 0; i < arr.length; i++) {
    if (leftHS[i] * 2 + 1 < arr.length) {
      leftHS.push(leftHS[i] * 2 + 1);
    }
    if (leftHS[i] * 2 + 2 < arr.length) {
      leftHS.push(leftHS[i] * 2 + 2);
    }
    if (rightHS[i] * 2 + 1 < arr.length) {
      rightHS.push(rightHS[i] * 2 + 1);
    }
    if (rightHS[i] * 2 + 2 < arr.length) {
      rightHS.push(rightHS[i] * 2 + 2);
    }
  }

  for (index of leftHS) {
    totalLH += arr[index];
  }

  for (index of rightHS) {
    totalRH += arr[index];
  }

  if (totalLH > totalRH) {
    return "Left";
  } else if (totalRH > totalLH) {
    return "Right";
  } else {
    return "";
  }
};
