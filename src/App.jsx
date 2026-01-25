import { useState, useEffect } from "react";
import service from "./services";
import { compareDates } from "./utils/utils.js";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import "./styles/index.css";
import "./styles/variables.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [refetchEntries, setRefetchEntries] = useState(false);

  useEffect(() => {
    service.getEntries().then((e) => {
      const sortedEntries = e.sort((a, b) =>
        compareDates(a.dateAdded, b.dateAdded),
      );
      setEntries(sortedEntries);
    });
  }, [refetchEntries]);

  function signalReset() {
    setRefetchEntries(!refetchEntries);
  }

  if (entries.length === 0) {
    return <div>No data</div>;
  }
  return (
    <div className="mainDiv">
      <Header />
      <hr />
      <Body
        entries={entries}
        setEntries={setEntries}
        signalReset={signalReset}
      />

      <Footer />
    </div>
  );
}

export default App;
