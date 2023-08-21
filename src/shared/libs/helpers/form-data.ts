export const getFormDataValue = (data: FormData, key: string): string => {
  return data.get(key)?.toString() ?? "";
};
