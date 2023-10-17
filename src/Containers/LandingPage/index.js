import React, {useState, useEffect} from 'react';
import DesiredDetailsComp from '../../Componenets/DesiredDetails/DesiredDetailsComp';
import CurrentDetailsComp from '../../Componenets/CurrentDetails/CurrentDetailsComp';
import { Row, Col } from 'antd';
import './styles.css'

const LandingPage = () => {
    const [step, setStep] = useState(1);

    const renderComponent = (step) => {
        switch(step){
            case 1:
                return <DesiredDetailsComp step={step} setStep={setStep} />
            case 2:
                return <CurrentDetailsComp step={step} setStep={setStep} />
            default:
                return <DesiredDetailsComp step={step} setStep={setStep} />
        }
    }

    return(
        <>
            <div className='landing-container'>
                <Row>
                    <Col span={12}>
                        <div className='left-container'>
                            <h1>Find your perfect fit</h1>
                            <p style={{}}>
                                Find your ideal fit across all desired brands in just a minute
                            </p>
                            <div>
                                <p>📦 Avoid return due to size</p>
                                <p>⏱ Save time and effort</p>
                                <p>🚀 Super fast and easy to use</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={12}>
                        {renderComponent(step)}
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default LandingPage;