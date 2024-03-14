export function formatNumber({
  valueToFormat,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
}: {
  valueToFormat: string | number | boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}) {
  const value = Math.pow(10, maximumFractionDigits);
  const formatted = Math.trunc(Number(valueToFormat) * value) / value;
  return formatted.toLocaleString(`pt-br`, {
    minimumFractionDigits,
    maximumFractionDigits,
  });
}
