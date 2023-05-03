import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Blog = () => {
  return (
    <>
      <div className="w-full bg-black sticky top-0">
        <Navbar />
      </div>
      <div className="mx-1 sm:mx-2 md:mx-3 lg:mx-10">
        <h1 className="text-4xl">
          1. What's the differences between uncontrolled and controlled
          components
        </h1>
        <h1 className="text-2xl">
          answer : differences between uncontrolled and controlled components
        </h1>
        <h1 className="text-xl">controlled components</h1>
        <p className="my-2">
          The value of the form input is controlled by React, meaning that the
          value is stored in the component's state.
        </p>
        <p className="my-2">
          The state is updated using the onChange event handler, which updates
          the state every time the value of the form input changes.
        </p>
        <h1 className="text-xl">Uncontrolled components</h1>
        <p className="my-2">
          The value of the form input is not controlled by React, meaning that
          the value is stored in the DOM.
        </p>
        <p className="my-2">
          There is no need to use the onChange event handler, as the value is
          not stored in the component's state.
        </p>
        <h1 className="text-4xl">
          2. How to validate React props using PropTypes
        </h1>
        <p>
          to validate react props using proptype install proptipe and import it{" "}
          {`import PropTypes from 'prop-types';`} then use <br />
          componentname.propType ={"{"}
          <br />
          {"propsName : propType.Type.isRequired if the props is rewuired"}{" "}
          <br />
          {"}"}
        </p>
        <h1 className="text-4xl">
          3. what's the difference between nodejs and express js
        </h1>
        <h1 className="text-2xl">Node.js</h1>
        <p className="my-2">
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It allows developers to write server-side applications in
          JavaScript
        </p>
        <h1 className="text-2xl">express.js</h1>
        <p className="my-2">
          Express.js is a web application framework built on top of Node.js. It
          provides a set of features that simplify the development of web
          applications. Express.js allows developers to create routes for
          different HTTP requests
        </p>
        <h1 className="text-4xl">
          What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="my-2">
          A custom hook is a JavaScript function that uses React hooks (such as
          useState, useEffect, useContext, etc.) to provide some reusable
          functionality
        </p>
        <p className="my-2">
          Creating a custom hook can be useful in the following scenarios:
        </p>
        <p className="my-2">
          Reusing code: If you have some logic or state management code that is
          used across multiple components, you can extract it into a custom hook
          and reuse it wherever needed. This can help reduce code duplication
          and make your code more maintainable.
        </p>
        <p className="my-2">
          Encapsulating logic: If you have some complex logic that needs to be
          executed in multiple places, you can encapsulate it in a custom hook
          to make it easier to use and understand. This can help reduce the
          complexity of your components and make your code more modular.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
