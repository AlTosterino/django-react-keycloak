import Keycloak from "keycloak-js";

const _kc = new Keycloak({
  url: "http://localhost:8080",
  realm: "master",
  clientId: "react",
});

const initKeycloak = (onAuthenticatedCallback) => {
  _kc
    .init({
      checkLoginIframe: false,
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
      pkceMethod: "S256",
    })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("User not authenticated");
      }
      onAuthenticatedCallback();
    })
    .catch(error => console.log(error));
};

const doLogin = _kc.login;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5).then(successCallback).catch(doLogin);
const getLoginUrl = () => _kc.createLoginUrl();
const getLogoutUrl = () => _kc.createLogoutUrl();

const AuthenticationService = {
  initKeycloak,
  doLogin,
  isLoggedIn,
  getToken,
  updateToken,
  getLoginUrl,
  getLogoutUrl,
};

export default AuthenticationService;
