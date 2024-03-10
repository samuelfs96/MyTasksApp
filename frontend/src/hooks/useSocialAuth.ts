import { googleApiLogin } from "@/services/socialAuth";
import toast from "react-hot-toast";
import { IResolveParams } from "reactjs-social-login";

function useSocialAuth() {
  const googleLogin = ({data}: IResolveParams) => {
    googleApiLogin(data)
      .then(({data: {key}}) => {
        console.log('Sesion iniciada con exito: '+ key)
        toast.success('Sesion iniciada con exito');
      })
      .catch(({ response: { data } }) => {
        toast.error(data.message);
        return;
      });
  };

  return {
    googleLogin,
  };
}

export default useSocialAuth;
