export const formatString = (string: string | number | undefined | null) => {
  if (string === undefined || string === null) return "0";

  if (!Number.isNaN(Number(string)))
    return Number(string).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });

  return String(string);
};
