import React, {useState, useContext} from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Card, Radio,Row, Col, Typography, Space, Select, Button } from 'antd';
import nike from '../../images/brands/nike.png'
import levis from '../../images/brands/levis.png'
import HM from '../../images/brands/h&m.png'
import adidas from '../../images/brands/adidas.png'
import pepejeans from '../../images/brands/pepe-jeans.png'
import westside from '../../images/brands/westside.png'
import './styles.css'

const CurrentDetailsComp = ({step, setStep}) => {
    const {Title} = Typography;
    const [currentBrand, setCurrentBrand] = useState("")
    const [currentCategory, setCurrentCategory] = useState("")
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

    const handleSubmit = () => {
        const payload = { currentBrand, currentCategory }
        dispatch({ type: 'ADD_INPUTS', payload })
        setStep(step + 1)
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
                        <Col span={24} className='col'>
                            <Title level={5}>Brand Name : {currentBrand}</Title>
                            <Space wrap>
                                <div className='brand-container'>
                                {brands.map(image => (
                                    <div className='brand-image'>
                                        <img src={image.image} onClick={() => setCurrentBrand(image.label)} />
                                    </div>
                                ))}
                                </div>
                            </Space>
                        </Col>
                    </Row>
                     <Row>
                        <Col span={24}>
                            <Title level={5}>Category : {currentCategory}</Title>
                            <Space wrap>
                                <div className="brand-container">
                                    {categories.map(item => (
                                         <div className='category-item' onClick={() => setCurrentCategory(item.value)}>
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

export default CurrentDetailsComp;