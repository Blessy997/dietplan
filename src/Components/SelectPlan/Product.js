import React, { useState, useEffect } from "react";
import axios from "axios";
import breakfast from "../../Images/breakfast.png";
export default function Product() {
  const [response, setresponse] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/ingredientWidget",
        {
          headers: {
            accept: 'text/html',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
            'x-rapidapi-key': '2651d12021mshc4e81293d87a130p1e75acjsn36d0bfd7f378'
          }
        }
      )
      .then((res) => {
        for (let i = 0; i < 4; i++) {
          response.push(res.data.images[i]);
        }
        console.log("array", response);
      })
      .catch((err) => {});
  }, []);
  return (
    <div id="product">
      <div className="product-container">
        <div className="new-container">
          <h2>Break Fast</h2>
          <img src={breakfast}></img>
          <h3>Asian Beef Salad</h3>
        </div>
        {response.map((res, index) => (
          <div className="new-container">
            <h2>Break Fast</h2>
            <img src={res.url}></img>
            <h3>Asian Beef Salad</h3>
          </div>
        ))}
        {/* <div className="new-container">
          <h2>Break Fast</h2>
          <img src={breakfast}></img>
          <h3>Asian Beef Salad</h3>
        </div>
        <div className="new-container">
          <h2>Break Fast</h2>
          <img src={breakfast}></img>
          <h3>Asian Beef Salad</h3>
        </div> */}
      </div>
    </div>
  );
}
