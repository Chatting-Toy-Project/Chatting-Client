// setCookie('kg_access_token', accessEncrpyText, {
//   sameSite: 'strict',
//   path: '/',
//   expires: new Date(accessTokenValue.exp * 1000)
// });

import { deleteCookie, setCookie } from "cookies-next";

export const AuthUtil = {
  onLoginSuccess: (data: { token: string; userEmail: string }) => {
    const accessTokenValue = jwtDecode(data.token) as { exp: number };
    setCookie("kg_access_token", data.token, {
      sameSite: "strict",
      path: "/",
      expires: new Date(accessTokenValue.exp * 1000),
    });
    localStorage.setItem("user", JSON.stringify({ userEmail: data.userEmail }));
  },

  logout: () => {
    deleteCookie("kg_access_token");
    localStorage.removeItem("user");
  },
};

const jwtDecode = (token: string): unknown => {
  const payload = token.split(".")[1];
  const decodedPayload = atob(payload);
  return JSON.parse(decodedPayload);
};
