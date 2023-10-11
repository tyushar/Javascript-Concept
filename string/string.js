// 1. Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
// If the first character is x return true. If not, return false.

function startsWithX(string) {
  if (string.charAt(0) === 'x') {
    return true;
  }
  return false;
}

// console.log(startsWithX('zyz'));
// console.log(startsWithX('Xylophone'));

// 2. Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

function startsWithX(string) {
  if (string[0].toLowerCase() === 'x') {
    return true;
  }
  return false;
}

// console.log(startsWithX('Xylophones'));
// console.log(startsWithX('spaceX'));

// 3. Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X.
// Return true if the last character is either lower-case x or upper-case X, false otherwise.

function endsWithX(string) {
  if (string[string.length - 1].toLowerCase() === 'x') {
    return true;
  }

  return false;
}

// console.log(endsWithX('spaceX'));

// 4. Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.

function isAllX(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== 'x') {
      return false;
    }
  }
  return true;
}

// console.log(isAllX('Xx'));
// console.log(isAllX('xAbX'));

// 5. Let's find the longer half of the string before and after the x!

// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
// Take the longer string and return it!

// split the string at the first occurrence of x
// return the larger of the two resulting strings
// i.e. HappyxDeveloper => Developer

function splitAtX(string) {
  const index = string.indexOf('x');
  const a = string.slice(0, index);
  const b = string.slice(index + 1);
  return a.length > b.length ? a : b;
}

// console.log(splitAtX(' HappyxDeveloper'));

// 6. The function shortestString takes two string arguments: str1 and str2.
// Determine which of the two strings is shorter, return that string.
