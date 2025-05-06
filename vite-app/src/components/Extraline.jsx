import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../servicesapis/cryptoApis";
import News from "./News";
import Feature from "./Feature";

const { Title } = Typography;

const Extraline = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(globalStats);

  return (
    <div className="extraline">
      <Title level={2} className="extraline-header">
       Earn with Cryptocurrency by tracking them everytime and staying updated!
      </Title>
      <div className="text-effect">
        <h1>
          <span> Analysis. </span>
          <span> Following. </span>
          <span> Tracing. </span>
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="extraline-header">
        <a href="javascript:;" className="scroll-down mouse effect2">
          <span></span>
        </a>
      </div>
      <br />
      
      <Feature/>

      <div className="features">
        <h1>* * * * * * * * * *</h1>
        <Title level={5} className="content">
          Wanna become Cryptomaster? , This site is right for you ,
          interactive{" "}
          <span class="underline--magical">
            You will be getting visual graphs, aggregated news, comprehensive exchange listings,
            live market updates and much more here! Stay tuned , Stay updated
          </span>{" "}
            Discover new opportunities all at one place !!
        </Title>
        <br />
        <Title level={5} className="content">
         Our platform offers comprehensive{" "}
          <span class="underline--magical2">
            information on various crypto exchanges. Your ambition , our platform .....
          </span>{" "}
          Stay connected to the market each and every moment and don't miss any developments
          {" "}
        </Title>
        <h1> * * * * * * * * *</h1>
      </div>
    </div>
  );
};

export default Extraline;