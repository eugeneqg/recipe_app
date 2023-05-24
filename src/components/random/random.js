import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetData from "../../services/services";
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { getRandomRecipe } from "../../redux/slices/randomSlice";
import "./random.sass";

const RandomRecipe = () => {

    const dispatch = useDispatch();
    const randomRecipe = useSelector(state => state.random.meal);
    const [isLoaded, setIsLoaded] = React.useState(false);
    
    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(data => {
                dispatch(getRandomRecipe(...data.meals));
                console.log(randomRecipe);
            })
            .catch(e => {
                throw new Error("Couldn't fetch a random recipe");
            })
    }, [dispatch]);

    return (
        <Container fluid="md" className="mb-5">
            <h2>Let’s try something random!</h2>
            <Row>
                <Col md={5}>
                    <div className="random-pic-wrapper d-flex align-items-center">
                        <img src={randomRecipe.strMealThumb} alt={randomRecipe.strMeal} className="img-fluid"></img>
                    </div>
                </Col>
                <Col className="d-flex align-items-center">
                    <div className="text-content">
                        <h3 className="w-100">{randomRecipe.strMeal}</h3>
                        <p className="w-100 ">{randomRecipe.strInstructions ? randomRecipe.strInstructions.slice(0, 300) + "..." : "Loading"}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default RandomRecipe;