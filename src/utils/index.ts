/**
 * @description Tool Function Encapsulation
 * @author Luo Wang
 */

/**
 * Format Money
 * @param num
 * @returns
 */
export const formatMoney = (num?: number | string) => {
  if (!num) return 0;
  const a = parseFloat(num.toString());
  return a.toLocaleString("en-US", { style: "currency", currency: "USD" });
};
