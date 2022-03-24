import { useContext } from "react";
import ReactDataGrid from "react-data-grid";
import { Link } from "react-router-dom";
import { AppContext } from "../appprovider";
import { Layout, CHeaderH1, GridContainer } from "./styles";

const columns = [
  { key: "id", name: "S.No." },
  { key: "action", name: "Action" },
  { key: "device", name: "Devices" },
  { key: "time", name: "Time" }
];

const getGeneratedRows = (actionLogs) => {
  return actionLogs.map((log, index) => ({
    id: index + 1,
    action: log.type,
    device: log.device,
    time: log.time.toLocaleString()
  }));
};

const ActionLogs = () => {
  const { state } = useContext(AppContext);
  const rows = getGeneratedRows(state.actionLogs);
  return (
    <Layout>
      <CHeaderH1>Action Logs</CHeaderH1>
      <Link to="/">Home</Link>
      <GridContainer>
        <ReactDataGrid columns={columns} rows={rows}></ReactDataGrid>
      </GridContainer>
    </Layout>
  );
};

export default ActionLogs;
