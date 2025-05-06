import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../servicesapis/cryptoApis";

import down from "../images/icondown.png";
import up from "../images/iconup.png";

const Currency = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {

    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {/* // gutter to give the dimension to the card */}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          // xs : extra small
          // sm : small
          // lg : large device

          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <div className="crypto-graph">
                  <span >Daily Change: {millify(currency.change)}%</span>

                  <span className="cry-change">
                    {currency.change >= 0 ? (
                      <img width="26" height="26" src={up} />
                    ) : (
                      <img width="26" height="26" src={down} />
                    )}
                  </span>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Currency;