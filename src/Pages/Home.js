import { useState } from "react";




const Home = () => {

        const [blog, setBlog]= useState([
        {title:'My new Blovg', body:'lopemdcv..................', author:'m', id:1},
        {title:'My new Blovg', body:'lopemdcv..................', author:'a', id:2},
        {title:'My new Blovg', body:'lopemdcv..................', author:'r', id:3},
        {title:'My new Blovg', body:'lopemdcv..................', author:'i', id:4},
        {title:'My new Blovg', body:'lopemdcv..................', author:'o', id:5},
        {title:'My new Blovg', body:'lopemdcv..................', author:'mario', id:6},
        {title:'My new Blovg', body:'lopemdcv..................', author:'arahimx', id:7},
        {title:'My new Blovg', body:'lopemdcv..................', author:'abc', id:8},
        {title:'My new Blovg', body:'lopemdcv..................', author:'ass', id:9},
        {title:'My new Blovg', body:'lopemdcv..................', author:'cc', id:10}
    ]);



return(
    <div className="home">
    {
        blog.map((blogs)=>(
        <div className="blog-preview" key={blogs.id}>
            <h2>{blogs.title}</h2>
            <label >{blogs.author}</label>
            <p>{blogs.body}</p>

        </div>

        )

        )
    }
    </div>
);
}
  export default Home;