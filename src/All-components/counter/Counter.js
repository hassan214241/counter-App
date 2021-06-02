import { Container, Row, Col, Button } from "react-bootstrap";
import "./counter.css";
import { incNumber, decNumber, recNumber } from "../reduxs/action/action";
import { useSelector, useDispatch } from "react-redux";


function Counter() {

    const myState = useSelector(state => state.incTheNumber)
    const dispatch = useDispatch();

    return (
<div className="center_div">
        <Container xs={12} md={12} lg={12} >
            <Row xs={12} md={12} lg={12}>
                <Col xs={12}>
                    <h3 className="heading">Create a Counter App using Redux</h3>
                </Col>
            </Row>
            <Row xs={12} md={12} lg={12}>
                <Col xs={1}>
                    <button className="btn1" 
                    onClick={() => dispatch(decNumber())} >
                        -
                    </button>
                </Col>
                <Col xs={10} className="counter">
                    <h1>{myState}</h1>
                </Col>
                <Col xs={1}>
                    <button className="btn2" onClick={
                        () => dispatch(incNumber())
                    }>+</button>
                </Col>

            </Row>
            <Row xs={12} md={12} lg={12}>
                <Col xs={12} >

                    <Button className="btn3"
                    onClick={()=> dispatch(recNumber()) }
                     >
                     RESET
                     </Button>
                </Col>
            </Row>

        </Container>
</div>
    );
}

export default Counter;