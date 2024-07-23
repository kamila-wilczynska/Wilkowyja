// import styles from "./BlogPost.module.css";
// import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const BlogPost = ({
//   title,
//   category,
//   description,
//   image,
//   isLeftAligned,
//   distanse,
// //   highlights,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

//   const toggleContent = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={styles.blogPost}>
//       <div
//         className={styles.blogHeader}
//         onClick={isMobile ? toggleContent : undefined}
//       >
//         <h3>{title}</h3>
//         {isMobile && (
//           <span className={styles.toggleIcon}>
//             {isOpen ? <FaChevronUp /> : <FaChevronDown />}
//           </span>
//         )}
//       </div>
//       <div
//         className={`${styles.blogContent} ${
//           isLeftAligned ? styles.leftImage : styles.rightImage
//         } ${isMobile && !isOpen ? styles.hidden : ""}`}
//       >
//         <img src={image} alt={title} />
//         <div className={styles.textContent}>
//           <p className={styles.category}>{category}</p>
//           <p className={styles.description}> {distanse} km od Wilkowyji</p>
//           <h1 className={styles.title}>{title}</h1>
//           <p className={styles.description}>{description}</p>
//           {/* <p className={styles.description}>{highlights}</p> */}
//           {/* <a href="#0" className={styles.readMore}>
//             READ MORE
//           </a> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;

import styles from "./BlogPost.module.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const BlogPost = ({
  title,
  category,
  description,
  image,
  isLeftAligned,
  distanse,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.blogPost}>
      <div
        className={styles.blogHeader}
        onClick={isMobile ? toggleContent : undefined}
      >
        <h3>{title}</h3>
        {isMobile && (
          <span className={styles.toggleIcon}>
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        )}
      </div>
      <div
        className={`${styles.blogContent} ${
          isLeftAligned ? styles.leftImage : styles.rightImage
        } ${isMobile && !isOpen ? styles.hidden : ""}`}
      >
        <img src={image} alt={title} />
        <div className={styles.textContent}>
          <p className={styles.category}>{category}</p>
          <p className={styles.description}>{distanse} km od Wilkowyji</p>
          <h1 className={styles.title}>{title}</h1>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
