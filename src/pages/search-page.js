import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import RecipeCard from "../components/recipe-card/recipe-card";
import loader from "../public/img/loader.svg"

const SearchPage = () => {
    const searchResults = useSelector(state => state.search.results);

    const recipeList = searchResults !== null ?
    searchResults.slice(0, 10).map(recipe => {

            return (
                <RecipeCard key={recipe.isMeal} id={recipe.idMeal} recipe={recipe}/>
            )}) :
                // <img src={loader} alt="loading"></img>
                <p>No results</p>

    console.log(searchResults)
    return (
        <Container fluid="md">
            <div className="title-link-wrapper margin-top"><h2 className="title-link">Search</h2></div>
            {recipeList}
        </Container>
    )
}

export default SearchPage;