export default function isBalance(text) {
  const leftBraces = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    switch (Brace(char)) {
      case 'L':
        leftBraces.push(char);
        break;
      case 'R':
        if (!Match(leftBraces.pop() + char)) {
          return false;
        }
        break;
    }
  }

  return leftBraces.length === 0; 
}

export function Match(brackets) {
  switch (brackets) {
    case '()': case '{}': case '[]':
      return true;
    default:
      return false;
  }
}

export function Brace(c) {
  switch (c) {
    case ')': case '}': case ']':
      return 'R';
    case '(': case '{': case '[':
      return 'L';
    default:
      return ''; 
  }
}

// console.log(isBalance('c[d]')) // true
// console.log(isBalance('a{b[c]d}e')) // true
// console.log(isBalance('a{b(c]d}e')) // false - ] doesn’t match (
// console.log(isBalance('a[b{c}d]e}')) // false - nothing matches final }
// console.log(isBalance('a{b(c)')) // false - no matching }
