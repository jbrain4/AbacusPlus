var value = ""
var leftSide = 0
var thirdValue = 0
var operation = ""
var doesDecimalExist = false

// Number buttons
function zeroButton() {
  value += "0"
  document.getElementById("output").innerHTML = value
}
function oneButton() {
  if (value == "0") {
    value = "1"
  } else {
    value += "1"
  }
  document.getElementById("output").innerHTML = value
}
function twoButton() {
  if (value == "0") {
    value = "2"
  } else {
    value += "2"
  }
  document.getElementById("output").innerHTML = value
}
function threeButton() {
  if (value == "0") {
    value = "3"
  } else {
    value += "3"
  }
  document.getElementById("output").innerHTML = value
}
function fourButton() {
  if (value == "0") {
    value = "4"
  } else {
    value += "4"
  }
  document.getElementById("output").innerHTML = value
}
function fiveButton() {
  if (value == "0") {
    value = "5"
  } else {
    value += "5"
  }
  document.getElementById("output").innerHTML = value
}
function sixButton() {
  if (value == "0") {
    value = "6"
  } else {
    value += "6"
  }
  document.getElementById("output").innerHTML = value
}
function sevenButton() {
  if (value == "0") {
    value = "7"
  } else {
    value += "7"
  }
  document.getElementById("output").innerHTML = value
}
function eightButton() {
  if (value == "0") {
    value = "8"
  } else {
    value += "8"
  }
  document.getElementById("output").innerHTML = value
}
function nineButton() {
  if (value == "0") {
    value = "9"
  } else {
    value += "9"
  }
  document.getElementById("output").innerHTML = value
}

// Other buttons
function decimalButton() {
  if (!doesDecimalExist) {
    value += "."
    document.getElementById("output").innerHTML = value
    doesDecimalExist = true
  }
}
function negativeButton() {
  value = (-1 * parseFloat(value, 10))
  document.getElementById("output").innerHTML = value
}
function percentButton() {
  value = (0.01 * parseFloat(value, 10))
  document.getElementById("output").innerHTML = value
}
function deleteButton() {
  if (value.length > 1) {
    value = value.slice(0, -1)
    document.getElementById("output").innerHTML = value
  } else if (value.length == 1) {
    value = "0"
    document.getElementById("output").innerHTML = value
  }

  if (value.indexOf('.') > -1) {
    doesDecimalExist = true
  } else {
    doesDecimalExist = false
  }
}


// Math function buttons
function addButton() {
  if (operation != "" && value != "") {
    calculate()
  } else if (operation != "" && value == "") {
    operation = "+"
  } else {
    leftSide = parseFloat(value, 10)
  }
  value = ""
  operation = "+"
  doesDecimalExist = false
}
function subButton() {
  if (operation != "" && value != "") {
    calculate()
  } else if (operation != "" && value == "") {
    operation = "-"
  } else {
    leftSide = parseFloat(value, 10)
  }
  value = ""
  operation = "-"
  doesDecimalExist = false
}
function multiButton() {
  if (operation != "" && value != "") {
    calculate()
  } else if (operation != "" && value == "") {
    operation = "*"
  } else {
    leftSide = parseFloat(value, 10)
  }
  value = ""
  operation = "*"
  doesDecimalExist = false
}
function divButton() {
  if (operation != "" && value != "") {
    calculate()
  } else if (operation != "" && value == "") {
    operation = "/"
  } else {
    leftSide = parseFloat(value, 10)
  }
  value = ""
  operation = "/"
  doesDecimalExist = false
}

// Result button
function calculate(){
  if (operation == "+") {
    leftSide = leftSide + parseFloat(value, 10)
    thirdValue = 0
  }
  else if (operation == "-") {
    leftSide = leftSide - parseFloat(value, 10)
    thirdValue = 0
  }
  else if (operation == "*") {
    leftSide = leftSide * parseFloat(value, 10)
    thirdValue = 0
  }
  else if (operation == "/") {
    leftSide = leftSide / parseFloat(value, 10)
    thirdValue = 0
  }
  else {
    leftSide = 0
    thirdValue = 0
  }
  document.getElementById("output").innerHTML = leftSide
  value = ""
  operation = ""
  doesDecimalExist = false
}

// Clear Button
function clearAll() {
  leftSide = 0
  value = ""
  operation = ""
  document.getElementById("output").innerHTML = leftSide
  doesDecimalExist = false
}


// Event listener
document.addEventListener("keydown", (event) => {
  event.stopImmediatePropagation();
  const keyName = event.key
  console.log('Key Pressed: ' + keyName)

  if (keyName == "1") {
    oneButton()
  } else if (keyName == "2") {
    twoButton()
  } else if (keyName == "3") {
    threeButton()
  } else if (keyName == "4") {
    fourButton()
  } else if (keyName == "5") {
    fiveButton()
  } else if (keyName == "6") {
    sixButton()
  } else if (keyName == "7") {
    sevenButton()
  } else if (keyName == "8") {
    eightButton()
  } else if (keyName == "9") {
    nineButton()
  } else if (keyName == "0") {
    zeroButton()
  } else if (keyName == "*" || keyName == "x") {
    multiButton()
  } else if (keyName == "/") {
    divButton()
  } else if (keyName == "+") {
    addButton()
  } else if (keyName == "-") {
    subButton()
  } else if (keyName == "%") {
    percentButton()
  } else if (keyName == ".") {
    decimalButton()
  } else if (keyName == "c") {
    clearAll()
  } else if (keyName == "=" || keyName == "Enter") {
    calculate()
  } else if (keyName == "Backspace") {
    deleteButton()
  }
});
