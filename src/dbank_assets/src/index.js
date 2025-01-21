// import { dbank } from "../../declarations/dbank";
import { dbank } from "../../declarations/dbank";
window.addEventListener("load", async function () {
  // console.log("I have loaded");
  const currentAmount = await dbank.checkBalance2();
  const twoDecimalPlaces = Math.round(currentAmount * 100) / 100;
  document.getElementById("value").innerText = twoDecimalPlaces;
});

document
  .querySelector("form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("I've been pressed");
    const button = event.target.querySelector("#submit-btn");

    const inputAmount = parseFloat(
      document.getElementById("input-amount").value
    );
    const outputAmount = parseFloat(
      document.getElementById("withdrawal-amount").value
    );
    button.setAttribute("disabled", true);

    await dbank.topUp(inputAmount);
    const currentAmount = await dbank.checkBalance2();

    const twoDecimalPlaces = Math.round(currentAmount * 100) / 100;
    document.getElementById("value").innerText = twoDecimalPlaces;
    button.removeAttribute("disabled");
  });
