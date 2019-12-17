import React, { Component } from "react";

// Components
import CommentForm from "./CommentForm";

class Post extends Component {
    render() {
        return (
            <div className="container">
                <div className="post">
                    <div className="text">
                        <h1>Post title</h1>
                        <p className="lead">Made by: author</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Harum maxime distinctio ducimus maiores vitae
                            asperiores, quod laboriosam totam reprehenderit illo
                            cumque delectus sunt ex fugiat illum eaque
                            molestias! Velit assumenda voluptatem porro quisquam
                            illo, perferendis adipisci iste, repellat sunt
                            praesentium distinctio mollitia quaerat autem
                            laudantium voluptatum reiciendis sed. Iure ab
                            tempore ut consequuntur debitis vero cupiditate
                            consectetur sint? Facilis, magni, delectus
                            consequuntur quibusdam vitae consectetur aliquid
                            eveniet, corporis sapiente nemo eaque in autem error
                            odit nihil ab unde quidem. Dolorem officia est
                            cumque deserunt eveniet a, expedita placeat ipsa
                            aperiam molestias accusamus aut ipsam beatae nihil
                            quod doloremque alias sed.
                        </p>
                    </div>
                    <div className="image">
                        <img src="/images/food6.jpg" alt="" />
                    </div>
                </div>
                <div className="">
                    <CommentForm />
                </div>
            </div>
        );
    }
}

export default Post;
