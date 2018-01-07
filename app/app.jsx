var ReactDOM = require('react-dom');
var React = require('react');
var Main = require('./components/Main.jsx');

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra",
        "iPhone 7",
        "Google Pixel",
        "Huawei P9",
        "Meizu Pro 6",
        "Asus Zenfone 3"
    ]
};

ReactDOM.render(
    <Main />,
    document.getElementById("app")
)
