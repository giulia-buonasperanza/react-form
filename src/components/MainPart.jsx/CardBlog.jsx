import articles from "../data/articles.js";

function CardBlog({ 
    title = "Titolo di default", 
    content = "Contenuto di default", 
    onDelete,
    id
    }) {

    return (
        <div className="card card-blog m-3 p-3 d-flex">
            <button type="button" className="btn-close ms-auto" aria-label="Close" onClick={() => onDelete(id)}></button>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default CardBlog;