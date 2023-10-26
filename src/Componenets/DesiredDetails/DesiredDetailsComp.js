import { Card, Typography, Row, Col, Radio, Space, Select, Button } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import nike from '../../images/brands/nike.png'
import levis from '../../images/brands/levis.png'
import HM from '../../images/brands/h&m.png'
import adidas from '../../images/brands/adidas.png'
import pepejeans from '../../images/brands/pepe-jeans.png'
import westside from '../../images/brands/westside.png'
import './styles.css'

const DesiredDetailsComp = ({ step, setStep }) => {
    const Title = Typography
    const [gender, setGender] = useState("male")
    const [desiredBrand, setDesiredBrand] = useState("")
    const [desiredCategory, setDesiredCategory] = useState("")
    const { details, dispatch } = useContext(AppContext)

    const brands = [
        { label: "levis", image: levis },
        { label: "nike", image: nike },
        { label: "H&M", image: HM },
        { label: "adidas", image: adidas },
        { label: "pepe-jeans",image : pepejeans },
        { label: "westside", image : westside}
    ]

    const categories = [
        { label : "T-Shirt", value : "tshirt"},
        { label : "Jeans", value : "jeans"},
        { label : "Shirt", value : "shirt"},
        { label : "Trousers", value : "trousers"}
    ]

    useEffect(() => {
        console.log(details)
    }, [details])

    const handleSubmit = () => {
        const payload = {  gender,desiredBrand, desiredCategory }
        dispatch({ type: 'ADD_INPUTS', payload })
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
                    <Row className="container-out">
                        <Col span={24}>
                            <Title level={5}>Gender</Title>
                            <Radio.Group defaultValue={gender} buttonStyle='solid' onChange={(e) => setGender(e.target.value)}>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className='col'>
                            <Title level={5}>Brand Name : {desiredBrand}</Title>
                            <Space wrap>
                                <div className='brand-container'>
                                {brands.map(image => (
                                    <div className='brand-image'>
                                        <img src={image.image} onClick={() => setDesiredBrand(image.label)} />
                                    </div>
                                ))}
                                </div>
                            </Space>
                        </Col>
                    </Row>
                     <Row>
                        <Col span={24}>
                            <Title level={5}>Category : {desiredCategory}</Title>
                            <Space wrap>
                                <div className="brand-container">
                                    {categories.map(item => (
                                         <div className='category-item' onClick={() => setDesiredCategory(item.value)}>
                                            {item.label}
                                         </div>
                                    ))}
                                </div>
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