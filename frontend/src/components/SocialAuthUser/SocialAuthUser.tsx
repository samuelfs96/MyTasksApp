"use client";

import { SocialUser } from "@/models/social_user";

export type SocialAuthUserProps = {
	social_user: SocialUser
};

const SocialAuthUser: React.FC<SocialAuthUserProps> = ({social_user}) => {
  return <div className="flex justify-center items-center gap-4">
	<img src={social_user.picture} alt="img" className="rounded-full w-10 h-10" />
	<span className="dark:text-white">Hola, {social_user.given_name}</span>
  </div>;
};

export default SocialAuthUser;
