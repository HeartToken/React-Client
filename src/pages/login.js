import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { magic } from '../lib/magic';
import { UserContext } from '../lib/UserContext';
import EmailForm from '../components/auth/EmailForm';
import SocialLogins from '../components/auth/SocialLogins';
import Footer from "../components/Footer";


const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // Redirec to /profile if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push('/');
  }, [user]);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        let userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        Router.push('/');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
      <>
<div className='flex-container'>
    <div className='login'>
      <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
      {/* <SocialLogins onSubmit={handleLoginWithSocial} /> */}
      <style jsx>{`
        .login {
          
          max-width: 30rem;
          margin: 40px auto 0;
          padding: 5rem;
          border: 1px solid #dfe1e5;
          border-radius: 4px;
          text-align: center;
          box-shadow: 0px 0px 7px 7px #f7f7f7;
          box-sizing: border-box;
        }
        
      `}</style>
    </div>
   
</div>
    </>
  );
};

export default Login;