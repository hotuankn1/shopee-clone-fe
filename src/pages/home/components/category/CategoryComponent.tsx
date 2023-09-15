import { Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { productLineController } from '../../../../controllers/productLineController'
import { ICategory } from '../../../../types/ICategory'
import { IPagination } from '../../../../types/IPagination'
import { IProductLine } from '../../../../types/IProductLine'

export default function CategoryComponent(props : Props) {
    const [list, setList] = useState<IPagination<IProductLine> | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newList = await productLineController.getList(1, 4, '', props.category.id);
                setList(newList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    
    return (
        <Row gutter={32}>
            {
                list && list.items.map(productLine => (
                    <Col xs={12} className='product'>
                        <Row gutter={10} >
                            <Col xs={12}>
                                <img src={productLine.products[0].image} />
                            </Col>
                            <Col xs={12}>
                                <Row align='stretch'>
                                    <Col xs={24}>
                                        <Typography.Text>{productLine.products[0].name}</Typography.Text>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography.Text>Colors: </Typography.Text>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography.Text>{productLine.products[0].inventoryAmount}</Typography.Text>
                                    </Col>
                                    <Col xs={24}>
                                        <Typography.Text>{productLine.products[0].price}</Typography.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                ))
            }
        </Row>
    )
}

interface Props {
    category: ICategory,
}
