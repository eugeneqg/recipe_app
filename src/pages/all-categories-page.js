import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GetData from "../services/services";

const AllCategoriesPage = () => {

    const [categoriesData, setCategoriesData] = React.useState([]);
    const [areLoaded, setAreLoaded] = React.useState(false);

    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(data => {
            setCategoriesData(data.categories);
            setAreLoaded(true);
        })
        .catch(e => {
            throw new Error(e);
        })
    }, [areLoaded])

    const categories = areLoaded ?
        categoriesData.map(cat => {
            return (
                <div>{cat.strCategory}</div>
            )
        }) :
        null

    return (

        <Container fluid="md">
            {categories}
        </Container>
    )
}

export default AllCategoriesPage;