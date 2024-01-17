function calculatePercentage(total, partial) {
  if (isNaN(total) || isNaN(partial)) throw new Error("Invalid arguments");
  total = Number(total);
  partial = Number(partial);
  if (total === 0) throw new Error("Invalid arguments");
  if (partial === 0) return total;
  const percentage = (total / 100) * partial;
  return Math.round(total - percentage);
}
module.exports = calculatePercentage;
