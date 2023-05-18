import "./search.sass";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Search = () => {
    return (
        <Container>
            <Row className="search d-flex justify-content-center align-items-center">
                <Col md={8} className="d-flex flex-wrap justify-content-center">
                    <h1 className="text-center mb-2">Let’s cook something <span>tasty</span></h1>
                    <input className="search-input ps-3" type="text" placeholder="What do you want eat today?"></input>
                </Col>
            </Row>
        </Container>
    )
}

export default Search;