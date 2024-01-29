function encrypt(inputString) {
    let result = '';
  
    for (let i = 0; i < inputString.length; i++) {
      let currentChar = inputString.charAt(i);
  
      // Check if the character is a lowercase letter
      if (/[a-z]/.test(currentChar)) {
        // Convert the character to its ASCII code, shift by 1, and convert back to a character
        result += String.fromCharCode((currentChar.charCodeAt(0) - 97 + 4) % 26 + 97);
      }
      // Check if the character is an uppercase letter
      else {
        // Convert the character to its ASCII code, shift by 29, and convert back to a character
        result += String.fromCharCode((currentChar.charCodeAt(0) - 65 + 29) % 26 + 65);
      }
      
    }
  
    return result;
    document.getElementById("thing").innerHTML(result)
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
  
