import netlifyIdentity from 'netlify-identity-widget';

const netlifyAuth = {
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity;
    netlifyIdentity.on('init', async user => {
      if (!user) {
        callback(user);
        return;
      }

      // refresh token if needed
      await this.refresh(callback);
    });
    netlifyIdentity.init();
  },
  async refresh(callback) {
    // refresh token if needed
    try {
      await netlifyIdentity.refresh(true);
      callback(netlifyIdentity.currentUser());
    } catch (error) {
      netlifyIdentity.logout();
      callback(null);
    }
  },
  authenticate(callback, onClose) {
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      callback(user);
      netlifyIdentity.close();
    });
    netlifyIdentity.on('close', onClose);
  },
  signout(callback) {
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      callback();
    });
  },
};

export default netlifyAuth;
