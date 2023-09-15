import { Col, Pagination, Row, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { productLineController } from '../../../../controllers/productLineController'
import { IPagination } from '../../../../types/IPagination'
import { IProductLine } from '../../../../types/IProductLine'
import './index.css'
import ProductListingComponent from './ProductListingComponent'

export default function ProductListing() {
    const [pagination, setPagination] = useState<IPagination<IProductLine>>()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const newPagination = await productLineController.getList(1, 12, '', 1);
            setPagination(newPagination);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []); 

    const handlePagination = async (page: number) => {
        try {
          const newPagination = await productLineController.getList(page, 12, '', 1);
          setPagination(newPagination);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <Row gutter={[0, 16]} className='product-listing'>
            <Col xs={24}>
                <Typography.Title level={3} className='apple-watch-title'>Apple Watch</Typography.Title>
            </Col>
            <Col xs={24}>
                <Row gutter={[16, 16]}>
                    {
                        pagination && pagination.items.map(item => (
                            <Col xs={12}>
                                <ProductListingComponent
                                    key={item.products[0].id}
                                    item = {item}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Col>
            <Col xs={24} className='pagination-container'>
                <Row justify={'center'}>
                    <Pagination defaultCurrent={1} total={pagination?.totalPages ? pagination.totalPages * 10 : 0} onChange={handlePagination} />
                </Row>
            </Col>
        </Row>
    )
}
