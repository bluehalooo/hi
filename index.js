function encrypt() {

    let result = '';
    let inputString = document.getElementById('encrypt').value;
  console.log(inputString)
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString.charAt(i);
  
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(currentChar)) {
        // Convert the character to its ASCII code, shift by idk, and convert back to a character
        result += String.fromCharCode((currentChar.charCodeAt(0) - 97 + 4) % 26 + 97);
      }
      // Check if the character is something else
      else {
        // Convert the character to its ASCII code, shift by how many i feel like lol, and convert back to a character
        result += String.fromCharCode((currentChar.charCodeAt(0) - 65 + 29) % 26 + 65);
      }
      
    }
  
    return result;
    document.getElementById("thing").innerHTML(result).value;
   }
  
   function deencrypt(inputString) {
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString.charAt(i);
  
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(currentChar)) {
        result += String.fromCharCode((currentChar.charCodeAt(0) - 97 - 4) % 26 + 97);
      }
      // Check if the character is an uppercase letter
      else {
        result += String.fromCharCode((currentChar.charCodeAt(0) - 65 - 29) % 26 + 65);
      }
      
    }
  
    return result;
    document.getElementById("thing").innerHTML(result)
   }
  
