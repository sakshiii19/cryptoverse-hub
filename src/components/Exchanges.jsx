import React from 'react';
// import millify from 'millify';
import {  Row, Col} from 'antd';
// import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';


const Exchanges = () => {
  const { isFetching } = useGetExchangesQuery();
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        
      </Row>
    </>
  );
};

export default Exchanges;
