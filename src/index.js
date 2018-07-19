import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContentInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render(){
    const content = this.props.content;
    const title = content.title;


    return(
      <li
      onClick={this.handleClick}
      >

        <div className="contentContainer">
          <div className="title">{title}</div>
          <div className="description">{this.state.isToggleOn ? '' : content.description}</div>
        </div>
      </li>
    );
  }
}

class Timeline extends React.Component {
  render() {
    const items=[];
    this.props.contents.forEach((content) => {
      items.push(
        <ContentInfo
        content={content}
        key={content.id} />
      );
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

class Pathway extends React.Component {
  render() {
    return (
      <div>
      <div className="intro">
        <div className="container">
          <h1 className="status">AG EMENA Manager Pathways</h1>
        </div>
      </div>
        <div className="timeline">
        <Timeline contents={this.props.contents} />
        </div>
      </div>
    );
  }
}


const CONTENTS = [
  { id: 0,
    title: 'Hiring & Onboarding the Right People',
    description: 'A session covering how to make sure your interviews are effective, and giving an overview of the areas you’ll need to cover in the first few weeks to bring a recruiter on board and begin to develop their skills.'
  },
  {
    id: 1,
    title:'Hiring & Onboarding the right people: Coaching call',
    description:'A follow up conversation to the training session reviewing how the skills have been put into practise in reality, and how we can help support you in the future with your recruiter.'
  },
  {
    id: 2,
    title:'Management Essentials',
    description:'An invaluable two days giving the key skills you’ll need to set objectives, motivate, and develop a new recruiter’s skills, as well as reminding you of your own responsibilities.  These are Essentials skills for now and throughout your career.'
  },
  {
    id: 3,
    title:'Management Essentials: Remote Bitesized learning sessions',
    description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to your recruiter as they grow into the role.'
  },
  {
    id: 4,
    title:'Management Essentials: Onsite Coaching',
    description:'Half a day with Professional Development supporting you in putting your Management Essentials skills into practice back in your office.'
  },

  {
    id: 5,
    title:'Building a Team',
    description:'A session looking at the new challenges involved in managing multiple people, including different personalities, holding different people accountable, allocation and delegation of responsibilities, and simply finding time.'
  },
  {
    id: 6,
    title:'Building a team: Remote Bitesized sized learning sessions',
    description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to the members of your team as it continues to grow and evolve.'
  },
  {
    id: 7,
    title:'Building a Team: Onsite Coaching',
    description:'Half a day with Professional Development supporting you in putting your Building a Team skills effectively into practice back in your office.'
  },
  {
    id: 8,
    title:'Leading a Team',
    description:''
  },
  {
    id: 9,
    title:'Leading a Team: Remote Bitesized Learning Sessions',
    description:''
  },
  {
    id: 10,
    title:'Leading a Team: Partner Day',
    description:''
  },
  {
    id: 11,
    title:'End of AIM Review',
    description:''
  }
]

ReactDOM.render(
  <Pathway
  contents={CONTENTS}
  />,

  document.getElementById('root')
);
