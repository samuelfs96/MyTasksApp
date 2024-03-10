import { setSocialUserData } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { appleApiLogin, googleApiLogin } from "@/services/socialAuth";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { IResolveParams } from "reactjs-social-login";

function useSocialAuth() {
  const dispatch = useDispatch();
  const social_user = useSelector((store: AppStore) => store.social_user);
  const messages = {
    success: "Sesión iniciada con éxito",
    error: "Error al iniciar sesión",
  };
  const googleLogin = ({ data }: IResolveParams) => {
    googleApiLogin(data)
      .then((res) => {
        const {
          user: { extra_data },
        } = res.data;
        console.log(messages.success, extra_data);
        dispatch(setSocialUserData(extra_data));
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
        const {
          user: { extra_data },
        } = res.data;
        console.log(messages.success, extra_data);
        dispatch(setSocialUserData(extra_data));
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
    social_user,
  };
}

export default useSocialAuth;
