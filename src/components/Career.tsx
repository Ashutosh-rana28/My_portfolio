// import "./styles/Career.css";

// const Career = () => {
//   return (
//     <div className="career-section section-container">
//       <div className="career-container">
//         <h2>
//           My career <span>&</span>
//           <br /> experience
//         </h2>
//         <div className="career-info">
//           <div className="career-timeline">
//             <div className="career-dot"></div>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Position In Company</h4>
//                 <h5>Company Name</h5>
//               </div>
//               <h3>20XX</h3>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
//               labore sit non ipsum temporibus quidem, deserunt eaque officiis
//               mollitia ratione suscipit repellat.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Position In Company</h4>
//                 <h5>Company Name</h5>
//               </div>
//               <h3>20XX</h3>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
//               labore sit non ipsum temporibus quidem, deserunt eaque officiis
//               mollitia ratione suscipit repellat.
//             </p>
//           </div>
//           <div className="career-info-box">
//             <div className="career-info-in">
//               <div className="career-role">
//                 <h4>Position In Company</h4>
//                 <h5>Company Name</h5>
//               </div>
//               <h3>NOW</h3>
//             </div>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
//               labore sit non ipsum temporibus quidem, deserunt eaque officiis
//               mollitia ratione suscipit repellat.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Career;


import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">

        <h2>
          My <span>Journey</span>
          <br /> & Experience
        </h2>

        <div className="career-info">

          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education</h4>
                <h5>Indumati Tibrewal Saraswati Vidya Mandir, Chatra</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed my 10th in 2021. This phase built my academic foundation 
              and sparked my curiosity towards technology and problem-solving.
            </p>
          </div>

          {/* 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Education</h4>
                <h5>Inter Science College, Hazaribagh</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Completed my 11th and 12th in the Science stream. During this time, 
              I developed a strong interest in technology and decided to pursue 
              a career in software development.
            </p>
          </div>

          {/* 3 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Exploration & Self Learning</h4>
                <h5>Skill Development Phase</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Focused on self-learning and skill development. Started learning 
              web development using HTML, CSS, and JavaScript, and built projects 
              like Customer Feedback Analysis while improving problem-solving skills.
            </p>
          </div>

          {/* 4 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE & AI Projects</h4>
                <h5>Rungta International Skills University</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Computer Science and actively working 
              on projects like Offline AI Knowledge Capsule. Focused on building 
              impactful solutions using AI and modern web technologies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;