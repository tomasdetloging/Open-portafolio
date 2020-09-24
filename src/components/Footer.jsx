import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          banner {
            icons {
              id
              image
              url
            }
          }
          footer {
            location
          }
        }
      }
    }
  `);

  const location = data.site.siteMetadata?.footer.location;
  const icons = data.site.siteMetadata?.banner.icons;

  return (
    <>
      <footer
        className="py-5 mt-5 text-center"
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-4">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">{location}</p>
            </div>
            <div className="col-6 col-lg-4 ">
              <h4 className="text-uppercase mb-4">Around the Web</h4>

              {icons.map((icon) => (
                <a
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  aria-label={`My ${icon.image.split("-")[1]}`}
                  className="btn btn-outline-light btn-social mx-1"
                >
                  <i className={`fab ${icon.image}`} />
                </a>
              ))}
            </div>
            <div className="d-none d-lg-block col-lg-4 mt-4 mt-lg-0">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          made with <i className="fas fa-heart"></i> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://github.com/tomasdetloging"
            aria-label="My GitHub"
          >
            Tomi
          </a>{" "}
          using <i className="fab fa-react"></i>
          {/* <p className="mb-0">
            <small className="text-muted">
              {" "}
              Project code is open source. Feel free to fork and make your own
              version.
            </small>
          </p> */}
        </div>
      </div>
    </>
  );
}
