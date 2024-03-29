function convertNumber() {
  const number = document.getElementById("inputNumber").value;
  

  // Handle invalid input
  if (isNaN(number)) {
    document.getElementById("decimalResult").textContent = "Invalid input!"; 
    document.getElementById("binaryResult").textContent = ""; 
    document.getElementById("octalResult").textContent = ""; 
    document.getElementById("hexadecimalResult").textContent = ""; 
    return; 
  }

  const decimalResult = parseInt(number); // Input is always treated as decimal initially
  const binaryResult = decimalResult.toString(2);
  const octalResult = decimalResult.toString(8);
  const hexResult = decimalResult.toString(16).toUpperCase();
  
  
  
  

  document.getElementById("decimalResult").textContent = "Decimal: " + decimalResult;
  document.getElementById("binaryResult").textContent = "Binaire: " + binaryResult;
  document.getElementById("octalResult").textContent = "Octal: " +  octalResult;
  document.getElementById("hexadecimalResult").textContent = "Hexadecimal: " + hexResult;
  
 
}

window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader-wrapper').style.display = 'none';
  }, 4000); // Timeout set to 5 seconds (5000 milliseconds)
};

const toggleSwitch = document.querySelector('#switch');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});
