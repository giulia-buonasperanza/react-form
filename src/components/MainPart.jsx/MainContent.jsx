import { useState } from "react";
import CardBlog from "./CardBlog";
import FormBlog from "./FormBlog";
import initialArticles from "../data/articles.js";


/*{
        id:1,
        title: "Best books to read in 2026",
        content: "Here are the best books to read in 2026..."
    }*/

function MainContent() {
    const [articles, setArticles] = useState(initialArticles);

    const addArticle = (newArticle) => {
        const articleWithId = {
            ...newArticle,
            id: crypto.randomUUID()
        };
        setArticles([...articles, articleWithId]);
    };

    const deleteArticle = (id) => {
        {
            const newArticles = articles.filter(article => article.id !== id);
            setArticles(newArticles);
        };
    };


        return (
            <div className="main-content">
                <FormBlog onAddArticle={addArticle} />

                {articles.map(article => (
                    <CardBlog key={article.id}
                        title={article.title}
                        content={article.content} 
                        onDelete={deleteArticle}
                        id={article.id}
                        />
                ))}
            </div>
        );
    }

    export default MainContent;