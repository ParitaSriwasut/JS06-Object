let user = {
  input: "",
  amount: "",
  expend1: "",
  expend2: "",
  remain: "",
};

do {
  if (user === null || isNaN(Number) || user <= 0);
  user.input = prompt("Do you spend money for today? Yes : No");
  if (user == "Yes".toLowerCase() || user == "No".toLowerCase()) {
    user.input;
  }
  user.amount = prompt("How much did you spend for today ?");
  user.expend1 = prompt("What did you pay for ?");
  user.expend2 = prompt("What else did you pay for ?");
  user.remain = prompt("How much money that you left ?");
  break;
} while (!user === null || !isNaN(Number) || !user <= 0);
console.log(user);
