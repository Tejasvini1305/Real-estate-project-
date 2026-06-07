import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";

const Recent = ({ favorites, setFavorites }) => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle=" Explore premium investment properties offering excellent growth potential,
  strategic locations, and attractive returns. Find the perfect real estate
  opportunity to build long-term wealth and financial security."
          />

          <RecentCard
            favorites={favorites}
            setFavorites={setFavorites}
          />
        </div>
      </section>
    </>
  );
};

export default Recent;
