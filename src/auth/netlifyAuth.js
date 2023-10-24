import netlifyIdentity from "netlify-identity-widget";

const netlifyAuth = {
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on("init", async (user) => {
      if (!user) {
        callback(user);
        return;
      }
    });
    netlifyIdentity.init();
  },
  authenticate(callback, onClose) {
    netlifyIdentity.open();
    netlifyIdentity.on("login", (user) => {
      callback(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on("close", onClose);
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on("logout", () => {
      callback();
    });
  },
};

export default netlifyAuth;
