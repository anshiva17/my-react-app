import ImageComponent from "./ImageComponent";
import Heading from "./heading";
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";

const teamMembers = [
  {
    name: "Donald John",
    role: "CEO & Founder",
    description:
      "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem",
    image: team1,
  },
  {
    name: "Adam Phillips",
    role: "Engineer",
    description:
      "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem",
    image: team2,
  },
  {
    name: "Thomas Olsen",
    role: "Engineer",
    description:
      "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem",
    image: team3,
  },
  {
    name: "James Alien",
    role: "Engineer",
    description:
      "Lorem elitr magna stet rebum dolores sed. Est stet labore est lorem lorem",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <div className="container-fluid py-5" id="team">
      <div className="container py-5">
        <div className="section-title position-relative text-center">
          <Heading text="Team" />

          <Heading
            className="font-secondary display-4"
            text="Meet The Team"
            level={1} // You can specify any heading level (h1 to h6)
          />
        </div>

        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`row ${
              index % 2 === 0
                ? "justify-content-lg-start"
                : "justify-content-lg-end"
            } m-0 mb-4 pb-2 mb-sm-0 pb-sm-0`}
          >
            <div className="col-lg-6 p-0">
              <div className="row m-0">
                {index % 2 === 0 ? (
                  <>
                    <div className="col-sm-6 p-0 text-center">
                      <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                        <h5 className="mb-2">{member.name}</h5>
                        <p className="text-muted font-italic mb-2">
                          {member.role}
                        </p>
                        <p>{member.description}</p>
                        <div className="position-relative mb-2">
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-sm-6 p-0"
                      style={{ minHeight: "300px" }}
                    >
                      <ImageComponent src={member.image} alt={member.name} />
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="col-sm-6 p-0"
                      style={{ minHeight: "300px" }}
                    >
                      <ImageComponent src={member.image} alt={member.name} />
                    </div>
                    <div className="col-sm-6 p-0 text-center">
                      <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                        <h5 className="mb-2">{member.name}</h5>
                        <p className="text-muted font-italic mb-2">
                          {member.role}
                        </p>
                        <p>{member.description}</p>
                        <div className="position-relative mb-2">
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a
                            className="btn btn-outline-primary btn-square mr-1"
                            href="#"
                          >
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
