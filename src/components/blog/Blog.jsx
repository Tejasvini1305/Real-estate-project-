import React from "react";
import "./blog.css";

const blogData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    title: "Top 10 Tips for First-Time Home Buyers",
    date: "June 5, 2026",
    author: "Admin",
    description:
      "Buying your first home can be exciting and challenging. Learn the essential steps to make a smart investment.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    title: "Why Real Estate is the Best Long-Term Investment",
    date: "June 2, 2026",
    author: "Admin",
    description:
      "Real estate continues to be one of the safest and most profitable investment options for building wealth.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    title: "How to Increase Your Property Value",
    date: "May 28, 2026",
    author: "Admin",
    description:
      "Simple renovations and smart upgrades can significantly improve your property's market value.",
  },
];

const Blog = () => {
  return (
    <section className="blog section">
      <div className="container">
        <div className="heading">
          <h1>Latest Real Estate Blogs</h1>
          <p>
            Stay updated with the latest property trends, investment tips,
            and real estate market insights.
          </p>
        </div>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <img src={blog.image} alt={blog.title} />
              <div className="blog-content">
                <span>
                  {blog.date} | By {blog.author}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <button className="read-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;