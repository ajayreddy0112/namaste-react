const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "ab" }, [
    React.createElement("h1", { key: 1 }, "I'm an h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "ac" }, [
    React.createElement("h1", { key: 1 }, "I'm an h1 tag"),
    React.createElement("h2", { key: 2 }, "I'm an h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  "Hello world from React!"
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
