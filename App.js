let outputScreen = document.getElementById("output-screen");


function display(num) {
  outputScreen.value += num;
}

function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } 
  catch (error) {
    alert("Invalid");
  }
}

// clear 

function Clear() {
  outputScreen.value = ''
}

// delete

function del() {
  outputScreen.value = outputScreen.value.slice(0,-1);
}