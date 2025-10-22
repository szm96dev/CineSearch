/**
 * Utility function to combine class names
 * @param {...(string|undefined|null|boolean)} classes - Class names to combine
 * @returns {string} Combined class names
 */
export const cn = (...classes) => {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim();
};
