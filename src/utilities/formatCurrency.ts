const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
export function formatCurrency(number: any) {
  return CURRENCY_FORMATTER.format(number);
}
