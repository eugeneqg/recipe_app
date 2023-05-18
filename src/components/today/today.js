import Container from "react-bootstrap/Container";
import test from "./img/blank.svg";
import "./today.sass";

const Today = () => {

    const data = () => {

        let pics = [];

        for (let i = 0; i < 5; i++) {
            pics.push({item: test})
        }

        return pics.map(pic => {
            return (
                <img src={pic.item} alt=""></img>
            )
        })
    }

    return (
        <div>
            <Container id="today" fluid="md">
                <h2>Today's picks</h2>
            </Container>
            <div className="d-flex gap-5 caroussel-wrapper">
                {data()}
            </div>

        </div>
    )
}

export default Today;