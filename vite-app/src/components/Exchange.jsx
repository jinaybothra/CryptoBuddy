import React from 'react'
import { useGetCryptoSearchQuery } from '../servicesapis/cryptoApis'
import millify from 'millify'
import {Row, Col, Input, Collapse, Typography, Avatar } from 'antd'
import { StopOutlined,CheckOutlined } from '@ant-design/icons';
import Loading from './Loading';
const { Text, Title } = Typography;
const { Panel } = Collapse;


const Exchange = () => {
  const [ searchedTerm, setSearchedTerm ] = React.useState('')
  const { data, isFetching } = useGetCryptoSearchQuery(searchedTerm)
  const searchedData = data?.data

  if(isFetching) return <Loading />;
  return (
    <>
      <Title level={2} className='heading'>Search Markets for specific Crypto</Title>
      <div className="search-crypto-market">
          <Input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchedTerm(e.target.value)}/>
      </div>

      <Row style={{margin: '15px'}}>
        <Col className='coindetail-heading' span={8}>Markets</Col>
        <Col className='coindetail-heading' span={6}>Crypto</Col>
        <Col className='coindetail-heading' span={6}>Symbol</Col>
        <Col className='coindetail-heading' span={4}>Recommendation</Col>
      </Row>
      <Row>

        
        {!isFetching &&  searchedData.markets.map((market, index) => (
          <Col span={24} key={index}>
            <Collapse>
              <Panel
                key={market.uuid}
                showArrow={false}
                header={(
                  <Row key={market.uuid}>
                    <Col span={8}>
                      <Text><strong>{index + 1}.</strong></Text>
                      <Avatar className="exchange-image" src={market.exchangeIconUrl} />
                      <Text><strong>{market.exchangeName}</strong></Text>
                    </Col>
                    <Col span={6}>{market.baseSymbol}</Col>
                    <Col span={6}>{market.quoteSymbol}</Col>
                    <Col span={4}>{(market.recommended) ? <CheckOutlined /> : <StopOutlined />}</Col>
                  </Row>
                  )}
              >  
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>


      <Row style={{margin: '15px'}}>
        <Col className='coin-details-heading' span={10}>Coins</Col>
        <Col className='coin-details-heading' span={7}>Price</Col>
        <Col className='coin-details-heading' span={7}>Symbol</Col>
        
      </Row>
      <Row>

        
        {!isFetching &&  searchedData.coins.map((coin, index) => (
          <Col span={24} key={index}>
            <Collapse>
              <Panel
                key={coin.uuid}
                showArrow={false}
                header={(
                  <Row key={coin.uuid}>
                    <Col span={10}>
                      <Text><strong>{index + 1}.</strong></Text>
                      <Avatar className="exchange-image" src={coin.iconUrl} />
                      <Text><strong>{coin.name}</strong></Text>
                    </Col>
                    <Col span={7}>${millify(coin.price)}</Col>
                    <Col span={7}>{millify(coin.symbol)}</Col>
                    
                  </Row>
                  )}
              >  
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
      
    </>
  )
}
export default Exchange;