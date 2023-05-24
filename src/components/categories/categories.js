import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./categories.sass";
import React from "react";
import GetData from "../../services/services";
import { getCategories } from "../../redux/slices/categorySlice";
import { useSelector, useDispatch } from "react-redux";

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const [areLoaded, setCategories] = React.useState(false);

    React.useEffect(() => {
        GetData.getData("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => {
            dispatch(getCategories(res.categories));
            setCategories(true);
        });
    }, [areLoaded])

    const categoryList = categories.slice(0, 8).map(cat => {
        return (
            <div className="category d-flex justify-content-center align-items-center img-fluid" key={cat.idCategory}>
                <div className="d-flex justify-content-center align-items-center category-name">
                    <p>{cat.strCategory.toUpperCase()}</p>
                </div>
                <img className="category-pic" src={cat.strCategoryThumb} alt={cat.strCategory}></img>
            </div>
        )
    })

    return (
        <Container id="categories" className="mb-5" fluid="md">
            <h2>Categories</h2>
            <Row className="">
                <Col md={12} className="d-flex flex-wrap justify-content-center justify-content-md-between gap-4">
                    {categoryList}
                </Col>
            </Row>
        </Container>
    )
}

export default Categories;