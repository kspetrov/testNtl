import netlifyAuth from "../auth/netlifyAuth.js";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((usr) => {
      setLoggedIn(!!usr);
      setUser(usr);
    });
  }, []);
  return (
    <div>
      <Head>
        <title>WkHelper!</title>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <div></div>
    </div>
  );
}
