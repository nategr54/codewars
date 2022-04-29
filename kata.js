// Simple function that determines if a plural is needed or not.
// It should take a number, and return true if a plural should be used with that number or false if not.
function plural(n) {
    if (n >= 0 && n < 1) {
      return true
    } else if (n > 1) {
      return true
    } else return false 
}

// OR
function plural(n) {
    return n !==1;
}