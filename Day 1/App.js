const heading = React.createElement("h1",
    {
        id: "title"
    },
    "heading 1 by React");

const heading2 = React.createElement("h2",
    {
        id: "title"
    },
    "HEADING 2 by react")



const container = React.createElement("div",
    {
        id: "container"
    },
    [heading, heading2]);//react element 

const roots = ReactDOM.createRoot(document.getElementById("root"));  // manipulation 

roots.render(container)