export const loadTokenState = () => {
  try {
    const accessToken = localStorage.getItem("access");
    const refreshToken = localStorage.getItem("refresh");

    if (accessToken && refreshToken) {
      return {
        auth: {
          token: {
            access: accessToken,
            refresh: refreshToken,
          },
        },
      };
    }
  } catch (e) {
    return undefined;
  }
};
