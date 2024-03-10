import { SocialAuthUser } from "../SocialAuthUser";
import { ThemeButton } from "../ThemeButton";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";
import useSocialAuth from "@/hooks/useSocialAuth";
import { CLIENT_ID } from "@/services/socialAuth";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  const { googleLogin, social_user } = useSocialAuth();
  return (
    <div className="p-6 flex justify-between shadow-sm">
      {social_user.id ? (
        <SocialAuthUser social_user={social_user} />
      ) : (
        <LoginSocialGoogle
          isOnlyGetToken={true}
          client_id={CLIENT_ID}
          onResolve={googleLogin}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      )}
      <ThemeButton />
    </div>
  );
};

export default Navbar;
