import CardBlog from "./CardBlog";
import articles from "../data/articles.js";


/*{
        id:1,
        title: "Best books to read in 2026",
        content: "Here are the best books to read in 2026..."
    }*/

function MainContent() {
    return (
        <div className="main-content">
            {articles.map(article => (
                <CardBlog key={article.id} 
                title={article.title} 
                content={article.content} />
            ))}
        </div>
    );
}

export default MainContent;