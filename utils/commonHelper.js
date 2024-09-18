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
