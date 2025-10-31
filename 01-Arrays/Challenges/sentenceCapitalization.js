// 1. Make the string lowercase (toLowerCase method)
// 2. Convert string to array (split method)
// 3. Capitalize each word (map method)
// 4. Convert array back to string (join method)

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitalize("hallo mars"));
console.log(capitalize("david waldstein IV"));