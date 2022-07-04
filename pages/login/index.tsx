import { AuthForm } from "../../components/auth/AuthForm";
import AuthenticationService from "../../services/AuthenticationService";

const AuthPage = () => {
  return (
    <div>
      <AuthForm />
    </div>
  );
};
export const getServerSideProps = async (ctx: any) => {
  let isAuthenticated = await AuthenticationService.checkAuthentication(
    ctx.req.headers.cookie
  );

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return {
      props: {},
    };
  } else
    return {
      redirect: { destination: "/test", permanent: false },
    };
};

export default AuthPage;
