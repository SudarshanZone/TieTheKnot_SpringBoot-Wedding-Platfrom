import axios from "axios";
import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function PaymentGateway() {
    const [fees, setFees] = useState("1000");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFees(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'http://localhost:8080/paymentGateway';

        try {
            const response = await axios.post(url, { fees });
            const { data } = response;

            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            document.body.appendChild(script);

            script.onload = () => {
                const options = {
                    key: '',
                    amount: fees * 100,
                    currency: 'INR',
                    name: 'TieTheKnot',
                    description: 'Payment for Services',
                    order_id: data.id,
                    handler: (response) => {
                        console.log(response);
                        alert('Payment successful!');
                        navigate('/bookingForm');
                    },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
            };
        } catch (error) {
            console.error('Payment failed');
            console.error(error);
            alert('Payment failed. Please try again.');
        }
    }

    return (
        <div>
            <Col lg={6}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Fees</b></Form.Label>
                        <Form.Control disabled type="text" placeholder="1000" name="fees" value={fees} onChange={handleChange} />
                    </Form.Group>
                    <Button style={{ backgroundColor: "rgb(0,102,102)" }} type="submit">
                        Pay
                    </Button>
                </Form>
            </Col>
        </div>
    );
}