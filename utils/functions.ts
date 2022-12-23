export const getPageCount = (count?: number) => {
  return Math.ceil((count || 1) / 10);
};
