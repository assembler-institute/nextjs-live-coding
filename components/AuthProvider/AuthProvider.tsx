import {getSession} from '@auth0/nextjs-auth0';
import Login from "@/components/Login/Login";

type Props = {
    children: React.ReactNode
};
const AuthProvider = async ({children}: Props) => {
    const session = await getSession();
    if (!session) {
        return <Login/>
    }
    return (
        <div>{children}</div>
    );
};
export default AuthProvider;
