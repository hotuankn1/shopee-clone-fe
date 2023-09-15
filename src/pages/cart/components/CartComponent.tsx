import { Button, Checkbox, Col, Row, Typography } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { orderController } from '../../../controllers/orderController'
import { IOrderProduct } from '../../../types/IOrder'
import { DeleteOutlined } from '@ant-design/icons';
import { IProduct } from '../../../types/IProduct'
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CartContext } from '../../../hooks/useCart';

export default function CartComponent(props: Props) {

    const [state, setState] = useState<State>({
        isDeleted: false,
        amount: props.item.amount,
    })


   

    if (state.isDeleted) {
        return null
    }

    return (
        <Col xs={24} className="cart-component">
            {
                state &&
                <Row gutter={16} align="middle">

                    <Col>
                        <Checkbox></Checkbox>
                    </Col>
                    <Col>
                        <img  style={{ width: '75px', height: "75px" }} />
                    </Col>

                    <Col>
                        <Row gutter={79}>
                            <Col>
                                <Row gutter={[0, 4]}>
                                    <Col xs={24}>
                                        <Typography.Title level={4}></Typography.Title>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography.Text style={{ fontSize: '14px', color: '#85858A' }}>Color: </Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Typography.Title level={4}>$</Typography.Title>
                            </Col>
                            <Col>
                                <Row gutter={16}>
                                    <Col>
                                        <Button>-</Button>
                                    </Col>
                                    <Col>
                                        <Typography.Text>{state.amount}</Typography.Text>
                                    </Col>
                                    <Col>
                                        <Button>+</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Typography.Title level={4}>$</Typography.Title>
                            </Col>
                            <Col>
                                <Button type='text' icon={<DeleteOutlined style={{ color: '#F5222D' }} />} ></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }

        </Col>
    )
}

interface Props {
    item: IOrderProduct
}

interface State {
    isDeleted: boolean;
    amount: number;
}