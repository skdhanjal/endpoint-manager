import { useContext } from "react";
import { AppContext } from "../appprovider";
import { Layout, CHeaderH1 } from "./styles";

const ActionLogs = () => {
  const { state } = useContext(AppContext);
  console.log(state);
  return (
    <Layout>
      <CHeaderH1>Action Logs</CHeaderH1>
    </Layout>
  );
};

export default ActionLogs;
