import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BotDetails() {
  const [botDetails, setBotsDetails] = useState(null);
  const { id } = useParams();
  //  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3000/bots/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // const bot = data.find((bot) => bot.id === id);
        console.log(data);
        setBotsDetails(data);
      });
  }, [id]);

  return (
    <div>
      {botDetails && (
        <div>
          <h1> Name :{botDetails.name}</h1>

          <div>
            <ul style={{ listStyle: "none" }}>
              <li>
                <div className="card m-4" style={{ width: "18rem" }}>
                  <img
                    src={botDetails.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </li>

              <li>Health: {botDetails.health}</li>
              <li>Damage: {botDetails.damage}</li>
              <li>Armor: {botDetails.armor}</li>
              <li>Class: {botDetails.bot_class}</li>
              <li>Catch Phrase: {botDetails.catchphrase}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default BotDetails;