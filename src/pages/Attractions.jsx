// src/pages/Attractions.jsx
import BlogPost from "../components/BlogPost/BlogPost";
import image1 from "../images/jeziorko-bobrowe-i-wieza-widokowa.jpg";
import image2 from "../images/Solina.jpeg";

import { Link } from "react-router-dom";
import SecondHero from "../components/SecondHero";
import Banner from "../components/Banner";

const blogPosts = [
  {
    title: "Jeziorka bobrowe",
    category: "Travel",
    description:
      "Summer is coming to a close just around the corner. But it's not too late to squeeze in another weekend trip...",
    image: image1,
    isLeftAligned: true,
  },
  {
    title: "Jezioro solińskie",
    category: "Travel",
    description:
      "Discover the hidden gems of the city and immerse yourself in the local culture...",
    image: image2,
    isLeftAligned: false,
  },
];

const Attractions = () => {
  return (
    <div>
      <SecondHero hero="defaultHero">
        <Banner title="Atrakcje w okolicy">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </SecondHero>

      <div className="blogContainer">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            category={post.category}
            description={post.description}
            image={post.image}
            isLeftAligned={post.isLeftAligned}
          />
        ))}
      </div>
    </div>
  );
};

export default Attractions;
