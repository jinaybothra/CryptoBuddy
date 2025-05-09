import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import DOMPurify from 'dompurify';
import Loading from "./Loading";

import { useGetCryptosQuery } from "../servicesapis/cryptoApis";
import { useGetCryptoNewsQuery } from "../servicesapis/cryptoNews";

const demoImage = "https://cdn-icons-png.flaticon.com/512/2965/2965879.png";
const demoOrg = "https://cdn-icons-png.flaticon.com/512/1323/1323734.png";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Currency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  console.log(cryptoNews);

  if (!cryptoNews || !cryptoNews.results) return <Loading />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Currency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option key={currency.name} value={currency.name}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews.results.map((news, index) => (
        <Col key={index} xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <Avatar
                  shape="square"
                  size={64}
                  src={news.favicon || demoOrg}
                  alt=""
                />
              </div>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(news.description_html || news.description),
                }}
              />
              <div className="provider-container">
                <div>
                  <Avatar src={news.favicon || demoImage} alt="" />
                  <Text className="provider-name">
                    {new URL(news.url).hostname}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
