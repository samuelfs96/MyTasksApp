import { setSocialUserData } from "@/redux/states";
import { AppStore } from "@/redux/store";
import { googleApiLogin } from "@/services/socialAuth";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { IResolveParams } from "reactjs-social-login";

function useSocialAuth() {
  const dispatch = useDispatch();
  const social_user = useSelector((store: AppStore) => store.social_user);
  const googleLogin = ({ data }: IResolveParams) => {
    googleApiLogin(data)
      .then((res) => {
        const {
          user: { extra_data },
        } = res.data;
        console.log("Sesion iniciada con exito: ", extra_data);
        dispatch(setSocialUserData(extra_data));
        toast.success("Sesion iniciada con exito");
      })
      .catch((error) => {
        console.log("Error al iniciar sesión", error);
        toast.error("Error al iniciar sesión");
        return;
      });
  }

  return {
    googleLogin,
    social_user
  };
}

export default useSocialAuth;
