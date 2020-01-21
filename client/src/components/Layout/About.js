import React from "react";

const About = () => {
    return (
        <div className="container about-page">
            <h1 className="text-center">Page about me!</h1>
            <div className="first-section py-4">
                <img src="/images/food6.jpg" alt="" />
                <div className="content">
                    <h2 className="text-center">Welcome to our site</h2>

                    <p className="lead">
                        Here we cook and eat healthy and simple vegetarian food
                        with natural ingredients, whole grains, good fats, fruit
                        and vegetables. Please e-mail David or Luise if you have
                        any questions or just want to say hi!
                    </p>
                </div>
            </div>
            <div className="second-section">
                <div className="author author-1">
                    <img src="/images/food1.jpg" alt="food" />
                    <div className="profile">
                        <h3 className="text-center">Jane Doe</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non aperiam quibusdam veritatis voluptates!
                            Aliquid dolorem libero placeat magnam mollitia non
                            repudiandae ipsam explicabo, deleniti perspiciatis
                            ex assumenda blanditiis id odio labore nam vero sit
                            esse ullam sapiente et beatae fuga impedit
                            asperiores. Natus fugiat nisi, officia facilis vero
                            possimus voluptatum?
                        </p>
                    </div>
                </div>
                <div className="author author-2">
                    <div className="profile">
                        <h3 className="text-center">John Doe</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Non aperiam quibusdam veritatis voluptates!
                            Aliquid dolorem libero placeat magnam mollitia non
                            repudiandae ipsam explicabo, deleniti perspiciatis
                            ex assumenda blanditiis id odio labore nam vero sit
                            esse ullam sapiente et beatae fuga impedit
                            asperiores. Natus fugiat nisi, officia facilis vero
                            possimus voluptatum?
                        </p>
                    </div>
                    <img src="/images/food2.jpg" alt="food" />
                </div>
            </div>
        </div>
    );
};

export default About;
