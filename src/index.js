import React from "react";
import ReactDOM from "react-dom";
import DocutilsViewer from "docutils-react/lib/Viewer";
import { getComponent as wrappedGetComponent } from "docutils-react/lib/docutilsWrapper";
import _linksXml from "../public/xml/_links.xml";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {_linksXml}
      <DocutilsViewer src="/xml" getComponent={wrappedGetComponent} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
