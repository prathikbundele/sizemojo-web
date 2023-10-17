import React from 'react';
import { Card, Radio,Row, Col, Typography, Space, Select, Button } from 'antd';

const CurrentDetailsComp = ({step, setStep}) => {
    const {Title} = Typography;
    const handleSubmit = () => {
        setStep(step +1)
    }

    return(
        <>
            <Card>
                <div>
                    <p>Current Brand Details</p>
                    <p>Fill the details of the brand for which you want your ideal size</p>
                </div>
                <div>
                    <Row>
                        <Col span={24}>
                                    <Title level={5}>Gender</Title>
                                    <Radio.Group defaultValue="a" buttonStyle="solid">
                                        <Radio.Button value="a">Male</Radio.Button>
                                        <Radio.Button value="b">Female</Radio.Button>
                                    </Radio.Group>
                        </Col>
                    </Row>
                    <Row>
                                <Col span={24}>
                                    <Title level={5}>Brand Name</Title>
                                    <Space wrap>
                                        <Select
                                        defaultValue="lucy"
                                        
                                        options={[
                                            { value: 'Levis', label: 'Levis' },
                                            { value: 'Nike', label: 'Nike' },
                                            { value: 'Pepe Jeans', label: 'Pepe Jeans' },
                                        ]}
                                        />
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Title level={5}>Category</Title>
                                    <Space wrap>
                                        <Select
                                        defaultValue="lucy"
                                        style={{ width : "100%" }}
                                        
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                        ]}
                                        />
                                    </Space>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Space wrap>
                                        <Button type="primary" onClick={handleSubmit}>Continue</Button>
                                    </Space>
                                </Col>
                            </Row>
                </div>
            </Card>
        </>
    )
}

export default CurrentDetailsComp;