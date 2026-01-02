export const cartState = $state({
  open: false,
  items: [],
});

export function addToCart(item) {
  const existing = cartState.items.findIndex((i) => i.name == item.name);

  if (existing != -1) {
    cartState.items[existing].quantity += 1;
  } else {
    item.quantity = 1;
    cartState.items.push(item);
  }

  cartState.open = true;
}

export function removeFromCart(index) {
  cartState.items.splice(index, 1);
}
