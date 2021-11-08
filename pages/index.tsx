import { Result } from "components";
import { useAppContext } from "context";
import { useEffect } from "react";
import { useGetServers } from "hooks/useGetServers";
import { sort } from "utilities/sort";
import { useLogout } from "hooks/useLogout";

const header = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Distance",
    key: "distance",
  },
];

export default function LoginPage() {
  const { sharedState, setState } = useAppContext();
  const [status, getServers] = useGetServers();
  const [statusLogout, logout] = useLogout({redirect:'/login'});

  useEffect(() => {
    getServers();
  }, []);

  return (
    <Result
      header={header}
      items={sharedState.servers}
      onClickHeader={(data) => {
        setState({ servers: sort(data, sharedState.servers) });
      }}
      logout={logout}
    />
  );
}
