import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

console.log(process.env);
function App() {
  return (
    <GoogleOAuthProvider clientId="">
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
