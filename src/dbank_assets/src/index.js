// import { dbank } from "../../declarations/dbank";
import { dbank } from "../../declarations/dbank";
window.addEventListener("load", async function () {
  // console.log("I have loaded");
  update();
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
    if (document.getElementById("input-amount").value.length != 0) {
      await dbank.topUp(inputAmount);
      update();
      document.getElementById("input-amount").value = "";
      await dbank.compound();

      button.removeAttribute("disabled");
    } else if (document.getElementById("withdrawal-amount").value.length != 0) {
      await dbank.withdrawal(outputAmount);
      update();
      document.getElementById("withdrawal-amount").value = "";
      await dbank.compound();

      button.removeAttribute("disabled");
    }
  });
async function update() {
  const currentAmount = await dbank.checkBalance();
  const twoDecimalPlaces = Math.round(currentAmount * 100) / 100;
  document.getElementById("value").innerText = twoDecimalPlaces;
}
