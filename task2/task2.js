let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let input = "";

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        let value = button.textContent;

        if (value === "C") {
            input = "";
            display.value = "";

        }
        else if (value === "=") {

            let result;

            if (input.includes("+")) {
                let parts = input.split("+");
                result = Number(parts[0]) + Number(parts[1]);
            }

            else if (input.includes("-")) {
                let parts = input.split("-");
                result = Number(parts[0]) - Number(parts[1]);
            }

            else if (input.includes("*")) {
                let parts = input.split("*");
                result = Number(parts[0]) * Number(parts[1]);
            }

            else if (input.includes("/")) {
                let parts = input.split("/");
                result = Number(parts[0]) / Number(parts[1]);
            }

            display.value = result;
            input = result;

        }
        else {
            input += value;
            display.value = input;
        }

    });

});