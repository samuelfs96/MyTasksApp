//import { SocialAuthUser } from "../SocialAuthUser";
import { ThemeButton } from "../ThemeButton";
import { LoginSocialApple, LoginSocialGoogle } from "reactjs-social-login";
import {
  AppleLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import useSocialAuth from "@/hooks/useSocialAuth";
import { APPLE_CLIENT_ID, GOOGLE_CLIENT_ID } from "@/services/socialAuth";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  const { googleLogin /* social_user */ } = useSocialAuth();
  return (
    <div className="p-6 flex justify-between shadow-sm">
      {/* <SocialAuthUser social_user={social_user} /> */}
      <div className="flex max-lg:flex-col">
        <LoginSocialGoogle
          isOnlyGetToken={true}
          client_id={GOOGLE_CLIENT_ID}
          onResolve={googleLogin}
        >
          <GoogleLoginButton
            style={{ padding: 0 }}
            text="Inicia sesión con google"
            size="40px"
            className="[&>*]:dark:text-white [&>*]:text-sm [&>div]:px-4 [&>div]:dark:bg-slate-600"
          />
        </LoginSocialGoogle>
        <LoginSocialApple
          isOnlyGetToken={true}
          client_id={APPLE_CLIENT_ID}
          onResolve={googleLogin}
        >
          <AppleLoginButton
            style={{ padding: 0 }}
            text="Inicia sesión con apple"
            size="40px"
            className="[&>*]:dark:text-white [&>*]:text-sm [&>div]:px-4 [&>div]:dark:bg-slate-600"
          />
        </LoginSocialApple>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
