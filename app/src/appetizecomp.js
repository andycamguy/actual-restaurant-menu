import GetComponent from "./axioscall" // sorry Justin. out of steam this week
import React from "react"

export default function Appetizers({ data }) {
    if (!data) {
      return null; // Render nothing if data is not available yet
    }
  
    // Filter the data for appetizers
    const appetizers = data.filter(item => item.category === 'appetizer');
  
    return (
      <div>
        {appetizers.map(appetizer => (
          <div key={appetizer.id}>
            <div>ID: {appetizer.id}</div>
            <div>Category: {appetizer.category}</div>
            <div>Spicy Level: {appetizer.spicy_level}</div>
            <hr />
          </div>
        ))}
      </div>
    );
  }