import React, { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../../../config";
import { Controls } from "../../Controls";
import { List } from "../../List";
import { Card } from "../../Card";
import { useNavigate } from "react-router-dom";

const HomePage = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length) {
      fetch(ALL_COUNTRIES)
        .then((res) => res.json())
        .then((data) => setCountries(data));
    }
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);
  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: "Population",
                description: c.population,
              },
              {
                title: "Region",
                description: c.region,
              },
              {
                title: "Capital",
                description: c.capital,
              },
            ],
          };
          return (
            <Card
              key={c.name}
              {...countryInfo}
              onClick={() => navigate(`/country/${c.name}`)}
            />
          );
        })}
      </List>
    </>
  );
};

export default HomePage;
