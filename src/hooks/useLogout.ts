import { useState } from "react";
import { useAppContext } from "context";
import { useRouter } from "next/router";

type useLogoutType = ({
  redirect,
}: {
  redirect: any;
}) => [string , (() => void)];

export const useLogout: useLogoutType = ({ redirect }) => {
  const { setState } = useAppContext();
  const [status, setStatus] = useState("");
  const router = useRouter();

  const setLogout = () => {
    setStatus("loading");
    localStorage.setItem("token", "");
    setState({ loginData: {} });
    router.push(redirect);
    setStatus("successful");
  };

  return [status, setLogout];
};
