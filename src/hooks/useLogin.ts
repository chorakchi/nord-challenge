import { useEffect, useState } from "react";
import { useAppContext } from "context";
import useFetch from "use-http";
import { useRouter } from "next/router";

type useLoginType = ({
  redirect,
}: {
  redirect: any;
}) => [string, (body: any) => void];

const url = "https://playground.tesonet.lt/v1";

export const useLogin: useLoginType = ({ redirect }) => {
  const { setState } = useAppContext();
  const [status, setStatus] = useState("");
  const router = useRouter();
  const { data = {}, post } = useFetch(url);

  const checkStatus = (body) => {
    setStatus("loading");
    post("tokens", body);
  };

  useEffect(() => {
    setState({ loginData: data });
    if (data.token) {
      localStorage.setItem("token", data.token);
      router.push(redirect);
      setStatus("successful");
    } else {
      setStatus("failed");
    }
  }, [data]);

  return [status, checkStatus];
};
