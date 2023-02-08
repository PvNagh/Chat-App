import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  return (
    <GoogleOAuthProvider clientId="655172468968-a74r9bkc443a553p9n20uh1chsumd38j.apps.googleusercontent.com">
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
