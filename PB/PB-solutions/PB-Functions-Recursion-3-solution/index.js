function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello world"))