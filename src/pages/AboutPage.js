import { Container, Row, Col } from 'reactstrap';
import aboutImg from '../app/assets/image/about.jpg';

const AboutPage = () => {
    return (
        <Container className='my-5 p-3' >
            <h1>About Us</h1>
            <div className='my-5'>
                <p>Coming from an Asian background, rice serves as a symbol of our culture and life.</p>
                <p>Fried rice, originating as a way to repurpose leftover rice, it has evolved into a beloved staple with its endless variations.<br />
                    In the modern days, a quick homemade meal is what you want to have after a busy day from life, work, family, or whatsoever.
                    This is why we established Fried Rice Paradise, to provide comfort food that not only brings people together with its taste but also spreads joy and care.
                </p>
            </div>
            <Row className='mt-5'>
                <Col className='text-center' lg='5'>
                    <img src={aboutImg} alt='about us' width='400px' height='auto' />
                </Col>
                <Col md='12' lg='7'>
                    <div className='about my-3'>
                        <h2>Our Little Story</h2>
                        <p>
                            One evening while preparing fried rice for dinner, I told my kids that it would be quick and delicious with mommy's love
                            then I would have time to play with them. Inspired by that moment, my older one Evelyn excitedly suggested
                            "Why not open a restaurant that sells fried rice so everyone can taste it? And I'm going to call it Fried Rice Paradise!"
                            Just like that, <italic>Fried Rice Paradise</italic> was born as an idea.
                            Her enthusiasm and creativity sparked a vision of sharing our love for this simple yet flavorful dish with others, turning a casual family dinner into a potential business dream.
                        </p>
                    </div>
                </Col>
            </Row>
            <div className='my-5'>
                <h2>Our Mission</h2>
                <p className='mt-4'>
                    Our business mission is built on a simple yet powerful foundation:
                    using fresh, high-quality ingredients to create homemade food that nourishes both body and soul.
                    We believe that great food starts with simplicity, ensuring every dish is made with care, authenticity, and attention to detail.
                    By prioritizing fresh ingredients, we not only deliver delicious and wholesome meals but also support a healthier lifestyle for our customers.
                    More than just serving food, we are committed to creating a warm and welcoming experience, where every bite reflects our dedication to quality and customer satisfaction.
                    Your trust and well-being matter to us, and we take pride in offering meals that feel just like home.
                </p>
            </div>
        </Container>
    )
};

export default AboutPage;