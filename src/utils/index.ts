export const getToken = (): string | null => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (accessToken) {
    return accessToken;
  }
  return null;
};
