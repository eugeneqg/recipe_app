// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import RecipeCard from "../components/recipe-card/recipe-card";
import { useParams } from "react-router-dom";

const RecipePage = () => {
    const {id} = useParams()

    return (
        <p>{id}</p>
    )

}

export default RecipePage;