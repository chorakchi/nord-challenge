import { useEffect, useState } from "react";
import { useAppContext } from "context";
import { useRouter } from "next/router";
import useFetch from "use-http";

type useGetServersType = () => [string, () => void];

const url = "https://playground.tesonet.lt/v1"

export const useGetServers: useGetServersType = () => {
  const { sharedState, setState } = useAppContext();
  const [status, setStatus] = useState("");
  const router = useRouter();
  const { data = [], get } = useFetch(url, {
    headers: {
      Authorization: sharedState.loginData.token,
    },
  });

  const getServers = () => {
    if (sharedState.loginData.token) {
      setStatus("loading");
      get("servers");
    } else {
      setStatus("Unauthorized");
      router.push("/login");
    }
  };

  useEffect(() => {
    if (data) {
      setState({ servers: data });
      setStatus("successful");
    }
  }, [data.length]);

  return [status, getServers];
};
