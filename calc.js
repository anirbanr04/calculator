console.log("welcome");


let input = document.querySelector("input");
let btn = document.querySelectorAll("button");
console.log(btn)
for (let key of btn) {
    key.addEventListener("click", () => {

        let keyvalue = key.innerText;
        console.log(keyvalue);

        if (keyvalue == "X") {
            keyvalue = "*";
            input.value += keyvalue;
        }
        else if (keyvalue == "=") {
            input.value = eval(input.value);

        }
        //    for other keys--------
        else {
            input.value += keyvalue;
        }

    })
}

// clear button--------------------------
let arr = Array.from(btn);
let c = arr[2];
c.addEventListener("click", () => {
    let input = document.querySelector("input");
    input.value = "";

})

// ------------------------------------------------











