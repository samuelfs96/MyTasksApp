import { appleApiLogin, googleApiLogin } from "@/services/socialAuth";
import toast from "react-hot-toast";
import { IResolveParams } from "reactjs-social-login";

function useSocialAuth() {
  const messages = {
    success: "Sesión iniciada con éxito",
    error: "Error al iniciar sesión",
  };
  const googleLogin = ({ data }: IResolveParams) => {
    googleApiLogin(data)
      .then((res) => {
        console.log(messages.success, res);
        toast.success(messages.success);
      })
      .catch((error) => {
        console.log(messages.error, error);
        toast.error(messages.error);
        return;
      });
  };
  const appleLogin = ({ data }: IResolveParams) => {
    appleApiLogin(data)
    .then((res) => {
      console.log(messages.success, res);
      toast.success(messages.success);
    })
      .catch((error) => {
        console.log(messages.error, error);
        toast.error(messages.error);
        return;
      });
  };

  return {
    googleLogin,
    appleLogin,
  };
}

export default useSocialAuth;
