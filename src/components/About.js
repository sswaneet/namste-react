import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is About us Page</h1>
      <div className="divider-line"></div>
      <h2>Team</h2>
      <UserClass></UserClass>
    </div>
  );
};

export default About;
