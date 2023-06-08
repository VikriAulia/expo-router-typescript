import { useRouter, useSegments } from "expo-router";
import React from "react";

const AuthContext = React.createContext();

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    // check router path location using segment
    const mustLogin = segments[0] ==="(user)";

    if (
      // If the user is not signed in and the initial segment is in the mustLogin group then.
      !user &&
      mustLogin
    ) {
      // Redirect to the login page.
      router.replace("/login");
    } 
    
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setAuth({}),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}