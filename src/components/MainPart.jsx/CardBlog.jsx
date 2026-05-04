import articles from "../data/articles.js";

function CardBlog({ 
    title = "Titolo di default", 
    content = "Contenuto di default" 
    }) {

    return (
        <div className="card card-blog m-3 p-3">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default CardBlog;