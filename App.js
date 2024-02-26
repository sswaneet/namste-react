import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Swaneet is Coding 🔥"
);

//jsx - not not part of react or HTML it is different syntax (both react element and JSX are same objects)
//This is React Element
const jsxHeading = (
   <h1 className="head" tabIndex="5">
    Swaneet is coding in jsx 🔥
  </h1>
);

//This is functional component(React Component)
const Title = ()=>{
  return <h1 className="head" tabIndex="5">
    This is function component 🔥
  </h1>
};

const data = 1000;

//This is component Composition ( one component inside another like below used Title), multiple ways
// {} use when you need any javascript code inside JSX
const FunctionalHeading = () => (
  <div id="container">
    {jsxHeading}
    {100+200}
    <div>{data}</div>
    <Title/>
    {Title()}
    <Title></Title>
    <h1 className="head" tabIndex="5">
      Swaneet is coding in functional component 🔥
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalHeading/>);
