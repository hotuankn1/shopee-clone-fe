import { Col, Row, Typography } from 'antd'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import './index.css'

export default function Cart() {
  return (
    <Row>
      <Col xs={24}>
        <Header />
      </Col>
      <Col xs={24}>
        <Col xs={24} className="cart-container">
          <Row gutter={[0, 32]}>
            <Col xs={24} className="cart-header">
              <Row justify={'space-between'}>
                <Col>
                  <Typography.Title level={3}>My Cart</Typography.Title>
                </Col>
                <Col>
                  <Typography.Text style={{ color: '#FA541C' }}>08 Product</Typography.Text>
                </Col>
              </Row>
            </Col>
            <Col xs={24}>
              <Row gutter={32} justify="space-between" style={{ flexWrap: 'nowrap' }}>
                <Col xs={16}>
                  <Row gutter={[0, 16]}>
                   
                  </Row>
                </Col>
                <Col xs={8} className='order-information'>
                  <Row gutter={[0, 16]}>
                    <Col xs={24}>
                      <Row gutter={[0, 16]}>
                        <Col xs={24}>
                          <Typography.Title level={3} className='order-title'>Order Information</Typography.Title>
                        </Col>
                        <Col xs={24}>
                          <Row >
                            <Col xs={24}>
                              <Row justify={'space-between'}>
                                <Col >
                                  <Typography.Text>Total Amount:</Typography.Text>
                                </Col>
                                <Col >
                                  <Typography.Text></Typography.Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={24}>
                              <Row justify={'space-between'}>
                                <Col >
                                  <Typography.Text>Discount:</Typography.Text>
                                </Col>
                                <Col >
                                  <Typography.Text>0</Typography.Text>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={24}>
                              <Row justify={'space-between'}>
                                <Col >
                                  <Typography.Text>Total:</Typography.Text>
                                </Col>
                                <Col >
                                  <Typography.Text></Typography.Text>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={24}>

                        </Col>
                      </Row>
                    </Col>
                    <Col xs={24}>
                      <Row style={{ width: '100%' }}>
                        {
                        
                        }

                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>

      <Col xs={24}>
        <Footer />
      </Col>
    </Row>
  )
}
