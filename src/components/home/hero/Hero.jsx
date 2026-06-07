import React, { useState } from "react";
import Heading from "../../common/Heading";
import { list } from "../../data/Data";
import "./hero.css";
import Swal from "sweetalert2";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);

    const filtered = list.filter((item) => {
      const matchLocation =
        location === "" ||
        item.location.toLowerCase().includes(location.toLowerCase());

      const matchType =
        propertyType === "" ||
        item.type.toLowerCase().includes(propertyType.toLowerCase());

      return matchLocation && matchType;
    });

    setResults(filtered);

    if (filtered.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Property Not Found",
        text: "Try another location or property type.",
      });
    }
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home"
            subtitle="Find new & featured property located in your local city."
          />

          <form
            className="flex"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="box">
              <span>City/Street</span>
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="box">
              <span>Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </div>

            <div className="box">
              <span>Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
              />
            </div>

            <button
              type="button"
              className="btn1"
              onClick={handleSearch}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>

      {searched && (
        <section className="container" style={{ marginTop: "30px" }}>
          {results.length > 0 ? (
            <>
              <h2 style={{ marginBottom: "20px" }}>
                Search Results ({results.length})
              </h2>

              <div className="content grid3 mtop">
                {results.map((item) => (
                  <div
                    key={item.id}
                    className="box shadow"
                    style={{ padding: "20px" }}
                  >
                    <img
                      src={item.cover}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />

                    <h3>{item.name}</h3>
                    <p>{item.location}</p>
                    <p>{item.type}</p>
                    <h4>{item.price}</h4>
                    <span>{item.category}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <h2
              style={{
                textAlign: "center",
                color: "red",
                marginTop: "20px",
              }}
            >
              Property Not Found
            </h2>
          )}
        </section>
      )}
    </>
  );
};

export default Hero;