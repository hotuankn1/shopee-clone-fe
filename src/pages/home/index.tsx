import { Col, Row } from 'antd'
import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Category from './components/category'
import Introduce from './components/introduce'
import './index.css'

export default function Home() {
    return (
        <Row className='home'>
            <Col xs={24}>
                <Header />
            </Col>
            <Col xs={24}>
                <Introduce />
            </Col>
            <Col xs={24}>
                <Category />
            </Col>
            <Col xs={24}>
                <Footer />
            </Col>
        </Row>
    )
}
