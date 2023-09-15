import { Button, Col, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { categoryController } from '../../../../controllers/categoryController';
import { ICategory } from '../../../../types/ICategory';
import CategoryComponent from './CategoryComponent';
import './index.css'

export default function Category() {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await categoryController.getList()
            setCategories(categoriesData);
        };

        fetchCategories();
    }, []);

    return (
        <Row gutter={[0, 32]} className='category'>
            {
                categories.map((item) => (
                    <Col xs={24}>
                        <Row gutter={[0, 32]}>
                            <Col xs={24}>
                                <Typography.Title level={2} className='category-title'>{item.name} </Typography.Title>
                            </Col>

                            <Col xs={24}>
                                <CategoryComponent
                                category={item}
                                />
                            </Col>

                            <Col xs={24}>
                                <Row className='category-button-container' gutter={32} justify={'space-between'}>
                                    <Col className='line-left'></Col>
                                    <Col>
                                        <Button className='category-button'>See more</Button>
                                    </Col>
                                    <Col className='line-right'></Col>
                                </Row>
                            </Col>

                        </Row>
                    </Col>
                ))
            }
        </Row>
    )
}
