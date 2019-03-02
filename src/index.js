import React from "react";
import ReactDOM from "react-dom";
import DocutilsViewer from "docutils-react/lib/Viewer";
import { getComponent as wrappedGetComponent } from "docutils-react/lib/docutilsWrapper";
import "./styles.css";

function App() {
  return (
    <div className="App">
	  <DocutilsViewer src="/xml" getComponent={wrappedGetComponent} >{(a, b) =><div>{a}{b}</div>}</DocutilsViewer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
