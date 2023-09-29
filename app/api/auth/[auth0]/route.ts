// app/api/auth/[auth0]/route.js
import {handleAuth, handleLogin} from '@auth0/nextjs-auth0';

export const GET = handleAuth({
    login: handleLogin({
        returnTo: "/",
        authorizationParams: {
            audience: 'http://localhost:8081', // or YOUR AUTH0_AUDIENCE
            // IS CRUCIAL FOR THE CORRECT FUNCTIONING OF THE AUTH0 TOKEN
        },
    })
});
