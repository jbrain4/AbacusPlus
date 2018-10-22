var value = ""
var leftSide = 0
var thirdValue = 0
var operation = ""

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
function decimalButton() {
  value += "."
  document.getElementById("output").innerHTML = value
}
function negativeButton() {
  value = (-1 * parseFloat(value, 10))
  document.getElementById("output").innerHTML = value
}
function percentButton() {
  value = (0.01 * parseFloat(value, 10))
  document.getElementById("output").innerHTML = value
}



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
}

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
}

function clearAll() {
  leftSide = 0
  value = ""
  operation = ""
  document.getElementById("output").innerHTML = leftSide

}
