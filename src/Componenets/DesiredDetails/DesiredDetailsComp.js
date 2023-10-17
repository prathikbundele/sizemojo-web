import { Card, Typography, Row, Col, Radio, Space, Select, Button } from 'antd';
import React, {useState, useEffect, useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';
import nike from '../../images/brands/nike.png'
import levis from '../../images/brands/levis.png'
import HM from '../../images/brands/h&m.png'
import adidas from '../../images/brands/adidas.png'

const DesiredDetailsComp = ({step, setStep}) => {
    const Title = Typography
    const [desiredBrand, setDesiredBrand] = useState("")
    const [desiredCategory, setDesiredCategory] = useState("")
    const {details, dispatch} = useContext(AppContext)

    const brands = [
        {label : "levis", image : levis},
        {label : "nike", image : nike},
        {label : "H&M", image : HM},
        {label : "adidas", image : adidas}
    ]

    useEffect(() => {
        console.log(details)
    },[details])

    const handleSubmit = () => {
        const payload = {desiredBrand, desiredCategory}
        console.log(payload)
        dispatch({type : 'ADD_INPUTS', payload})
        setStep(step + 1)
    }

    return (
        <>
            <Card>
                <div>
                    <p>Desired Brand Details</p>
                    <p>Fill the details of the brand for which you want your ideal size</p>
                </div>
                <div>
                    <Row>
                        <Col span={24}>
                            <Title level={5}>Gender</Title>
                            <Radio.Group defaultValue="a" buttonStyle='solid'>
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
                                defaultValue=""                                       
                                options={[
                                { value: 'Levis', label: 'Levis' },
                                { value: 'Nike', label: 'Nike' },
                                { value: 'Pepe Jeans', label: 'Pepe Jeans' },
                                ]}
                                value={desiredBrand}
                                onChange={(event) => setDesiredBrand(event)}
                             />
                             {brands.map(image => (
                                <img src={image.image} onClick={() => setDesiredBrand(image.label)} />
                             ))}
                            </Space>
                        </Col>
                    </Row>
                    <Row>
                                <Col span={24}>
                                    <Title level={5}>Category</Title>
                                    <Space wrap>
                                        <Select
                                        defaultValue=""
                                        style={{ width : "100%" }}                                
                                        options={[
                                            { value: 'jack', label: 'Jack' },
                                            { value: 'lucy', label: 'Lucy' },
                                            { value: 'Yiminghe', label: 'yiminghe' },
                                        ]}
                                        onChange={(event) => setDesiredCategory(event)}
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

export default DesiredDetailsComp;