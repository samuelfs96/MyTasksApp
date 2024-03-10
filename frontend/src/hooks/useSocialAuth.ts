import { setSocialUserData } from "@/redux/states";
import { googleApiLogin } from "@/services/socialAuth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { IResolveParams } from "reactjs-social-login";

function useSocialAuth() {
  const dispatch = useDispatch();
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
        console.log(error);
        //toast.error(data.message);
        return;
      });
  };

  return {
    googleLogin,
  };
}

export default useSocialAuth;
