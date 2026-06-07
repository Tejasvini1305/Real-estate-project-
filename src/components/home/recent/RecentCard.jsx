import React, { useState } from "react";
import { list } from "../../data/Data";

const RecentCard = ({ favorites, setFavorites }) => {
  

  const handleFavorite = (property) => {
    const exists = favorites.find(
      (item) => item.name === property.name
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (item) => item.name !== property.name
        )
      );
    } else {
      setFavorites([...favorites, property]);
    }
  };

  return (
    <>
      <h3 style={{ marginBottom: "20px" }}>
        My List: {favorites.length}
      </h3>

      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const {
            cover,
            category,
            location,
            name,
            price,
            type,
          } = val;

          const isFavorite = favorites.find(
            (item) => item.name === name
          );

          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>

              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale"
                          ? "#25b5791a"
                          : "#ff98001a",
                      color:
                        category === "For Sale"
                          ? "#25b579"
                          : "#ff9800",
                    }}
                  >
                    {category}
                  </span>

                  <i
                    className="fa fa-heart"
                    onClick={() =>
                      handleFavorite(val)
                    }
                    style={{
                      cursor: "pointer",
                      color: isFavorite
                        ? "red"
                        : "#bec7d8",
                      fontSize: "20px",
                    }}
                  ></i>
                </div>

                <h4>{name}</h4>

                <p>
                  <i className="fa fa-location-dot"></i>
                  {location}
                </p>
              </div>

              <div className="button flex">
                <div>
                  <button className="btn2">
                    {price}
                  </button>
                  <label>/sqft</label>
                </div>

                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;