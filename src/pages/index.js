import netlifyAuth from "../auth/netlifyAuth.js";
import { useEffect, useState } from "react";

export default function Index() {
  const [loggedIn, setLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyAuth.initialize((usr) => {
      setLoggedIn(!!usr);
      setUser(usr);
    });
  }, []);
  return <h1>BOOP</h1>;
}
