export const typeTotalCheckHelpers = (
  data: any[] | undefined,
  type: string
) => {
  const typeFilter = data?.filter(
    (item: { ec_type: any }) => item.ec_type === type
  );
  if (typeFilter) {
    return typeFilter.length ? typeFilter.length : "-";
  }
};
