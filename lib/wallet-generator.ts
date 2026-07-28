export function generateWalletId(currency: string) {
  const prefix = currency.toUpperCase();

  const randomNumber = Math.floor(
    100000 + Math.random() * 900000
  );

  return `${prefix}${randomNumber}`;
}