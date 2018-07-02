import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Content extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          title: 'Hiring & Onboarding the Right People',
          description: 'A session covering how to make sure your interviews are effective, and giving an overview of the areas you’ll need to cover in the first few weeks to bring a recruiter on board and begin to develop their skills.'
        },
        {
          title:'Hiring & Onboarding the right people:</br> Coaching call',
          description:'A follow up conversation to the training session reviewing how the skills have been put into practise in reality, and how we can help support you in the future with your recruiter.'
        },
        {
          title:'Management Essentials',
          description:'An invaluable two days giving the key skills you’ll need to set objectives, motivate, and develop a new recruiter’s skills, as well as reminding you of your own responsibilities.  These are Essentials skills for now and throughout your career.'
        },
        {
          title:'Management Essentials:</br> Remote Bitesized learning sessions',
          description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to your recruiter as they grow into the role.'
        },
        {
          title:'Management Essentials:</br> Onsite Coaching',
          description:'Half a day with Professional Development supporting you in putting your Management Essentials skills into practice back in your office.'
        },

        {
          title:'Building a Team',
          description:'A session looking at the new challenges involved in managing multiple people, including different personalities, holding different people accountable, allocation and delegation of responsibilities, and simply finding time.'
        },
        {
          title:'Building a team:</br> Remote Bitesized sized learning sessions',
          description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to the members of your team as it continues to grow and evolve.'
        },
        {
          title:'Building a Team:</br> Onsite Coaching',
          description:'Half a day with Professional Development supporting you in putting your Building a Team skills effectively into practice back in your office.'
        },
        {
          title:'Leading a Team:',
          description:''
        },
        {
          title:'Leading a Team:</br> Remote Bitesized Learning Sessions',
          description:''
        },
        {
          title:'Leading a Team:</br> Partner Day',
          description:''
        },
        {
          title:'End of AIM Review',
          description:''
        }
      ]

    }
  }
  render(){

    return(
      <div className="content" onClick={() => this.setState(content)} >
        {this.state.value}
      </div>
    )
  }
}

class Timeline extends React.Component {
  constructor (){
    super();

  }

  renderContent(i){
    return <Content value={i} />;
  }


  render() {


    return (
      <div>

          <ul>
            <li><div className='contentContainer'>{this.renderContent(0)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(1)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(2)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(3)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(4)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(5)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(6)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(7)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(8)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(9)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(10)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(11)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(12)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(13)}</div></li>
            <li><div className='contentContainer'>{this.renderContent(14)}</div></li>
          </ul>
        </div>
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
          <Timeline />
        </div>
      </div>
    );
  }
}

const content = [
  {
    title: 'Hiring & Onboarding the Right People',
    description: 'A session covering how to make sure your interviews are effective, and giving an overview of the areas you’ll need to cover in the first few weeks to bring a recruiter on board and begin to develop their skills.'
  },
  {
    title:'Hiring & Onboarding the right people:</br> Coaching call',
    description:'A follow up conversation to the training session reviewing how the skills have been put into practise in reality, and how we can help support you in the future with your recruiter.'
  },
  {
    title:'Management Essentials',
    description:'An invaluable two days giving the key skills you’ll need to set objectives, motivate, and develop a new recruiter’s skills, as well as reminding you of your own responsibilities.  These are Essentials skills for now and throughout your career.'
  },
  {
    title:'Management Essentials:</br> Remote Bitesized learning sessions',
    description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to your recruiter as they grow into the role.'
  },
  {
    title:'Management Essentials:</br> Onsite Coaching',
    description:'Half a day with Professional Development supporting you in putting your Management Essentials skills into practice back in your office.'
  },

  {
    title:'Building a Team',
    description:'A session looking at the new challenges involved in managing multiple people, including different personalities, holding different people accountable, allocation and delegation of responsibilities, and simply finding time.'
  },
  {
    title:'Building a team:</br> Remote Bitesized sized learning sessions',
    description:'A series of sessions bringing in new skills as well as updating and adapting existing ones to make sure you’re giving the best support to the members of your team as it continues to grow and evolve.'
  },
  {
    title:'Building a Team:</br> Onsite Coaching',
    description:'Half a day with Professional Development supporting you in putting your Building a Team skills effectively into practice back in your office.'
  },
  {
    title:'Leading a Team:',
    description:''
  },
  {
    title:'Leading a Team:</br> Remote Bitesized Learning Sessions',
    description:''
  },
  {
    title:'Leading a Team:</br> Partner Day',
    description:''
  },
  {
    title:'End of AIM Review',
    description:''
  }
]


// ========================================

ReactDOM.render(
  <Pathway />,
  document.getElementById('root')
);
