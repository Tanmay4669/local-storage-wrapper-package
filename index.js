// Arrow function to set an item in local storage with optional expiration
const setItem = (key, value, expirationTime = null) => {
  const item = {
    value,
    expiry: expirationTime ? Date.now() + expirationTime : null,
  };
  localStorage.setItem(key, JSON.stringify(item));
};

// Arrow function to get an item from local storage, considering expiration
const getItem = (key) => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  if (item.expiry && Date.now() > item.expiry) {
    removeItem(key); // Remove expired item
    return null;
  }
  return item.value;
};

// Arrow function to remove an item from local storage
const removeItem = (key) => {
  localStorage.removeItem(key);
};

// Arrow function to clear all items from local storage
const clear = () => {
  localStorage.clear();
};

// Export functions as part of the module
module.exports = {
  setItem,
  getItem,
  removeItem,
  clear,
};
