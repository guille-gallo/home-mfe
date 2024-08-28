import './root.component.scss';

export default function Root() {
  return (
      <>
        <div className="showcase-container">
          <div className="header">
              <h4>Welcome to my showcase website!</h4>
          </div>
          <div className="content">
              <span>
                  This is a web app built using single-spa framework. <br></br>
                  Each section is a different micro-frontend. <br></br>
                  Use the links in the sidebar to navigate through them! <br></br>
                  Work in progress...
              </span>
          </div>
        </div>
      </>
  );
}
