import React from "react";
import MyComponent from "./addboot";
export default function Header()
 {
    return (
      <div className="container bg-dark">
        <div className="row">
          <div className="col">
            <h1 className="text-left text-white fs-4">This is where the logo goes</h1>
            <MyComponent />
        
          </div>
        </div>
      </div>
    );
  }