/** @format */

import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import PortfolioList from "./PortfolioList";
import { featureList, webList, mobList } from "../../data";

export default function Portfolio() {
  const [select, setSelect] = useState("feature");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "feature",
      title: "feature app",
    },
    {
      id: "mobile",
      title: "mobile app",
    },
    {
      id: "web",
      title: "web app",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "feature":
        setData(featureList);
        break;
      case "web":
        setData(webList);
        break;
      case "mobile":
        setData(mobList);
        break;
      default:
        setData(featureList);
    }
  }, [select]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={select === item.id}
            setSelect={setSelect}
            id={item.id}
          />
        ))}
      </ul>

      <div className="image_container">
        {data.map((get) => (
          <div className="item">
            <img src={get.img} alt="" />
            <div className="catagory_name">{get.img}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
