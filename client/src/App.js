import { useState } from 'react';
import ChatDialog from './components/chat/ChatDialog';
import LoginDialog from './components/account/LoginDialog';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return (
    isAuthenticated ?
      <>
        <Outlet></Outlet>
      </> : <Navigate replace to="/" />
  )
}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <GoogleOAuthProvider clientId="655172468968-a74r9bkc443a553p9n20uh1chsumd38j.apps.googleusercontent.com">
      <AccountProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginDialog isUserAuthenticated={isUserAuthenticated} />} />
            <Route path="/chat" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path="/chat" element={<ChatDialog />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
