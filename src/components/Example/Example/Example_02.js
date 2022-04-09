import {Row, Col, Divider} from 'antd';
import React from 'react'
import './example.css';

const Example02 = () => {
  return (
    
    <div className='grid-layout'>
      <Divider orientation='center'>Grid Example</Divider>
      <Row style={{backgroundColor:'blue'}}>
          <Col span={24}>col 1</Col>
      </Row>
      <Row>
          <Col style={{backgroundColor:'green'}} span={12}>col 1</Col>
          <Col style={{backgroundColor:'red'}} span={12}>col 2</Col>
      </Row>
      <Row>
          <Col style={{backgroundColor:'red'}} span={8}>col 1</Col>
          <Col style={{backgroundColor:'orange'}} span={8}>col 2</Col>
          <Col style={{backgroundColor:'green'}} span={8}>col 3</Col>
      </Row>
      <Row>
          <Col style={{backgroundColor:'orange'}} span={6}>col 1</Col>
          <Col style={{backgroundColor:'black'}} span={6}>col 2</Col>
          <Col style={{backgroundColor:'green'}} span={6}>col 3</Col>
          <Col style={{backgroundColor:'blue'}} span={6}>col 4</Col>
      </Row>
      <Row>
          <Col style={{backgroundColor:'green'}} span={8} offset={4}>col 1</Col>
          <Col style={{backgroundColor:'red'}} span={4} offset={-4}>col 2</Col>
      </Row>
      <Row>
          <Col style={{backgroundColor:'blue'}} span={18} pull={6}>col 1</Col>
          <Col style={{backgroundColor:'black'}} span={6} push={18}>col 2</Col>
      </Row>

      <div>
          <Divider orientation='left'>sub-element align left</Divider>
          <Row justify='start'>
            <Col style={{backgroundColor:'blue'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'green'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'black'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'orange'}} span={4}>col-4</Col>
          </Row>
          <Divider orientation='left'>sub-element align center</Divider>
          <Row justify='center' align='top'>
            <Col style={{backgroundColor:'blue'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'green'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'black'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'orange'}} span={4}>col-4</Col>
          </Row>
          <Divider orientation='left'>sub-element align right</Divider>
          <Row justify='end'>
            <Col style={{backgroundColor:'blue'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'green'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'black'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'orange'}} span={4}>col-4</Col>
          </Row>
          <Divider orientation='left'>sub-element  monospaced arrangement</Divider>
          <Row justify='space-between'>
            <Col style={{backgroundColor:'blue'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'green'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'black'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'orange'}} span={4}>col-4</Col>
          </Row>
          <Divider orientation='left'>sub-element align full</Divider>
          <Row justify='space-around'>
            <Col style={{backgroundColor:'blue'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'green'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'black'}} span={4}>col-4</Col>
            <Col style={{backgroundColor:'orange'}} span={4}>col-4</Col>
          </Row>
      </div>
      <div>
          <Divider orientation='left'>Normal</Divider>
          <Row>
              <Col style={{backgroundColor:'orange'}} span={6} order={4}>1 col-order-4</Col>
              <Col style={{backgroundColor:'black'}} span={6} order={3}>2 col-order-3</Col>
              <Col style={{backgroundColor:'gray'}} span={6} order={2}>3 col-order-2</Col>
              <Col style={{backgroundColor:'pink'}} span={6} order={1}>4 col-order-1</Col>
          </Row>
          <Divider orientation="left">Responsive</Divider>
          
      </div>
    </div>
  );
};

export default Example02;
