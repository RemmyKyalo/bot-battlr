import React from "react";


function EnlistedBots({ enlisted }) {
  return (
    <div>
        <h2>My Army</h2>
      {enlisted.map((bot) => {
        return (
          <>
          
          <ol style={{listStyle:"none"}}>
          {/* <li><h5 className="card-title">Name: {bot.name}</h5></li> */}
          <li><h5 className="card-title">  Name: {bot.name} </h5></li>

          </ol>
          </>
        );
      })}
    </div>
  );
}

export default EnlistedBots;
