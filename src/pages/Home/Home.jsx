import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        {/* <p> Pasut Fakchaeng </p> */}
      </header>

      <section className="about mt-4">
        <img
          src="https://img2.pic.in.th/pic/myImage.jpg"
          alt="Ken"
          className="profile-image"
        />
        <h2>About</h2>
        <p className="mt-4">
        สวัสดีครับผมชื่อ พศุตม์ ฟักแจ้ง เป็นนักศึกษาของมหาวิทยาลัยศรีปทุม 
        </p>
        <p>
        คณะเทคโนโลยีสารสนเทศ สาขาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์ Full Stack Developer
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list mt-4">
          <div className="skill">
            <img
              src="https://img2.pic.in.th/pic/html_logo.png"
              alt="html-icon"
            />
            <p>Html</p>
          </div>
          <div className="skill">
            <img src="https://img2.pic.in.th/pic/css-3.png" alt="css-icon" />
            <p>Css</p>
          </div>
          <div className="skill">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/java-script.png"
              alt="js-icon"
            />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img
              src="https://img2.pic.in.th/pic/physics.png"
              alt="react-icon"
            />
            <p>React</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
