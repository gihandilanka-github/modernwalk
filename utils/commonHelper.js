export function priceFormat(price, currentySymbol = 'Rs') {
  return `${currentySymbol} ${price.toFixed(2)}`;
}

export function formatTextToSlug(text) {
  return text
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
}

export const truncateTitle = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export const convertToPossessive = (text) => {
  let [firstWord, ...rest] = text.split('-');

  if (firstWord.endsWith('s')) {
    firstWord = firstWord.slice(0, -1);
  }

  firstWord += "'s";

  return [firstWord, ...rest].join(' ');
};

export const capitalize = (text) => {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
