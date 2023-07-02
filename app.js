import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transpiles it to React.createElement => React element - JS Object => HTMLElement(render)
const jsxheading = (
  <h1 className="heading" tabIndex="1">
    Namaste React using JSX!
  </h1>
);

// React Component
// Class based component - Old way
// Functional Component - New way

// React Functional Component => is a function that returns some piece of JSX code => a function which returns react element

// const HeadingComponent = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

const Title = () => <h1>Namaste React Functional Component Title</h1>;

// Component composition => Component inside component
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React Functional Component</h1>
//   </div>
// );

// React Fragment - behaves like a empty tag (because JSX have only one root element - rather that using extra div tag we can use react.fragment)
// const HeadingComponent = () => (
//   <React.Fragment>
//     <React.Fragment>
//       <div id="container">
//         <Title />
//         <h1 className="heading">Namaste React Functional Component</h1>
//       </div>
//       <div id="container-2"></div>
//     </React.Fragment>
//   </React.Fragment>
// );

// React.Fragment looks ugely so react provides empty tag like - <></>
const HeadingComponent = () => (
  <>
    <div id="container">
      <Title />
      <h1 className="heading">Namaste React Functional Component</h1>
    </div>
    <div id="container-2"></div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
