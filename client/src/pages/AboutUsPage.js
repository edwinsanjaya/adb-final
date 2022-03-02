import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutUsPage.scss'

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

function getAuthorsData() {
  let authors = [{
    name: "Edwin Sanjaya 陈润烈",
    job: "Graduate Student",
    interests: ["Software Engineering", "Product Management & Design", "Gamification", "e-Learning", "e-Commerce"],
    quote: "A generalist, jack of all trades and master of none. Try to master a lot of things despite the impossibilities."
  },
  {
    name: "Wilson Gunawan",
    job: "Software Engineer",
    organization: "Blibli.com",
    interests: ["Software Engineering"],
  },
  {
    name: "Stevanus Boris",
    job: "Software Engineer",
    organization: "TaniFund",
    interests: ["Software Engineering"],
  }]
  return authors;
}


class AboutUsPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let authors = getAuthorsData();
    return (
      <div>
        {
          authors.map((author, index) =>
            <div className="authors-container" key={index}>
              <div className="author-container">
                <div className="author-name">{author.name}</div>
                <div className="author-job">{author.job}</div>
                <div className="author-interests">
                  {
                    author.interests.map((interest, index) => 
                      <div className="author-interest" key={index}>{interest}</div>
                    )
                  }
                </div>
                {author.quote && <div className="author-quote">{author.quote}</div>}
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(AboutUsPage);