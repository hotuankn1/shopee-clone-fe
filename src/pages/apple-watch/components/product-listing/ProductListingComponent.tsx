import { Button, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { IProductLine } from '../../../../types/IProductLine'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productLineController } from '../../../../controllers/productLineController';


export default function ProductListingComponent(props:Props) {
    const [colorSelected, setColorSelected] = useState<string>("white")
    const [colorAmount, setColorAmount] = useState<number>(productLineController.caculateAmount("white", props.item));

    const colorSelect = (color: string) => {
        setColorSelected(color);
        console.log(color);
        updateColorAmounts(color)
    };

    const updateColorAmounts = (color: string) => {
        const amount = productLineController.caculateAmount(color, props.item);
        setColorAmount(amount);
    };

    const addToCart = () => {
    };
    return (
        <Row className='product' >
            <Col xs={24}>
                <Row gutter={[16, 0]}>
                    <Col xs={10}>
                        <img src={props.item.products[0].image} />
                    </Col>
                    <Col xs={14}>
                        <Row align="stretch" justify={'space-between'}>
                            <Col xs={24}>
                                <Typography.Title level={4}>{props.item.products[0].name}</Typography.Title>
                            </Col>
                            <Col xs={24}>
                                <Row gutter={17}>
                                    <Col><Typography.Text>Colors:</Typography.Text></Col>
                                    <Col>
                                        <Row className="color-options">
                                            <Col className={`color ${colorSelected === 'white' ? 'selected' : ''}`} id='white' onClick={() => colorSelect('white')}></Col>
                                            <Col className={`color ${colorSelected === 'green' ? 'selected' : ''}`} id='green' onClick={() => colorSelect('green')}></Col>
                                            <Col className={`color ${colorSelected === 'black' ? 'selected' : ''}`} id='black' onClick={() => colorSelect('black')}></Col>
                                            <Col className={`color ${colorSelected === 'red' ? 'selected' : ''}`} id='red' onClick={() => colorSelect('red')}></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={24}>
                                <Row>
                                    <Col><Typography.Text>Status:</Typography.Text></Col>
                                    {/* <Col><Typography.Text>{colorAmount}</Typography.Text></Col> */}
                                </Row>
                            </Col>
                            <Col xs={24}>
                                <Row justify={'space-between'}>
                                    <Col><Typography.Title level={4}></Typography.Title>{props.item.products[0].price}$</Col>
                                    <Col>
                                        <Button type='primary' icon={<ShoppingCartOutlined />} onClick={addToCart}></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>

        </Row>
    )
}

interface Props {
    item: IProductLine,
}