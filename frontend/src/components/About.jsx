import { Link } from "react-scroll";
import { HiOutlineArrowDown } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
            </div>
            <p className="mid">
              Welcome to our restaurant, where we strive to provide a warm and
              inviting dining experience for our guests. Our menu features a
              variety of delicious dishes made with the freshest ingredients
              sourced locally whenever possible. From our signature cocktails to
              our decadent desserts, every detail is carefully crafted to ensure
              a memorable dining experience. We are committed to providing
              exceptional service and creating a welcoming atmosphere for all
              who walk through our doors. Come join us and experience the
              perfect blend of flavors and hospitality.
            </p>
            <Link to="menu" spy={true} smooth={true} duration={500}>
              Explore Our Menu Below{" "}
              <span>
                <HiOutlineArrowDown />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
