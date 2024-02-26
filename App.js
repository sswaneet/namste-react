<div id="root">
    <div id="parent">
        <div id="child">
            <h1 id="heading1">I M heading1</h1>
            <h2 id="heading2">I M heading2</h2>
        </div>
        <div id="child2">
            <h1 id="heading1">I M heading1</h1>
            <h2 id="heading2">I M heading2</h2>
        </div>
    </div>
</div>


const parent = React.createElement("div", { id: "parent" }, [React.createElement("div", { id: "child" },
    [React.createElement("h1", { id: "heading1" }, "I M heading1"),
    React.createElement("h2", { id: "heading2" }, "I M heading2")]
),
React.createElement("div", { id: "child2" },
    [React.createElement("h1", { id: "heading1" }, "I M heading1"),
    React.createElement("h2", { id: "heading2" }, "I M heading2")]
)]
);








 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(parent);



// const heading = React.createElement("h1",
//     {id:"heading"},
//     "Hello World From React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);



