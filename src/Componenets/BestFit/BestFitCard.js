
import { Card, Radio,Row, Col, Typography, Space, Select, Button } from 'antd';
import "./styles.css"
import bottom from '../../images/logos/bottom.png'
import HM from '../../images/brands/h&m.png'

const BestFitCard = () => {
    
    return (
        <>
            <Card>
                <div>
                    <div className='row-1'>
                        <div>
                            <h1>Medium</h1>
                            <h2>Fits the best</h2>
                        </div>
                        <div>
                            <img src={bottom} />
                        </div>
                    </div>
                    <div className='row-2'>
                        <div>
                            <h3>Your Desired Brand details</h3>
                            <div>
                                <img src={HM} />
                                <p>JACKET</p>
                                <p>Slim Fit</p>
                            </div>
                        </div>
                    </div>
                    <div className='row-3'>
                        <p>Difference in measurement</p>
                        <Row style={{display : "flex", justifyContent : "space-evenly", textAlign : "center"}}>
                            <Col style={{display : "flex", flexDirection:"column"}}>
                                <label>30%</label>
                                <label>Chest size</label>
                                <label>Direction</label>
                            </Col>
                            <Col style={{display : "flex", flexDirection:"column"}}>
                                <label>30%</label>
                                <label>Chest size</label>
                                <label>Direction</label>
                            </Col>
                            <Col style={{display : "flex", flexDirection:"column"}}>
                                <label>30%</label>
                                <label>Chest size</label>
                                <label>Direction</label>
                            </Col>
                            <Col style={{display : "flex", flexDirection:"column"}}>
                                <label>30%</label>
                                <label>Chest size</label>
                                <label>Direction</label>
                            </Col>
                        </Row>
                    </div>
                    <div className='row-4'>
                        Note - If you plan on wearing this on top of something, you might have take the next size to appear
                    </div>
                </div>
            </Card>
        </>
    )
}

export default BestFitCard;