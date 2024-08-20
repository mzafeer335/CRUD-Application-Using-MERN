import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Toaster } from "react-hot-toast";
import UserTable from "./Table/UserTable";

function App() {
  return (
    <>
      <UserTable />
      <Toaster />
    </>
  );
}

export default App;
