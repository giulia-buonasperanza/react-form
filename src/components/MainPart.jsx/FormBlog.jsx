import { useState } from "react";


const initialFormState = {
    title: "",
    content: ""
};


function FormBlog({ onAddArticle }) {
    const [blogPost, setBlogPost] = useState(initialFormState);


    const handleChange = (event) => {
        const target = event.target;
        const targetValue = target.value;
        const targetName = target.name;

        const newBlogPost = {
            ...blogPost,
            [targetName]: targetValue
        };

        setBlogPost(newBlogPost);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        onAddArticle(blogPost);
        setBlogPost(initialFormState);
    }


    return (
        <div className="card m-3 p-3">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Titolo:</label>
                    <input type="text" className="form-control" id="title" name="title" value={blogPost.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Contenuto:</label>
                    <textarea className="form-control" id="content" name="content" value={blogPost.content} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Pubblica!</button>
            </form>
        </div>

    );
}

export default FormBlog;

/*<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Titolo:</label>
    <input type="text" className="form-control" id="title" name="title" value={blogPost.title} onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="content" className="form-label">Contenuto:</label>
    <textarea className="form-control" id="content" name="content" value={blogPost.content} onChange={handleChange} />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>*/
