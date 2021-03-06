import React, {Suspense, lazy} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
// import {CSSTransitionGroup} from 'react-transition-group';
import MessagingScreenshot from './RaiseMe Messaging Screenshot.png';

import {
  TransitionGroup,
  CSSTransition,
  CSSTransitionGroup
} from "react-transition-group";
import About from './about';
import Contact from './contact';
import Portfolio from './portfolio';

// const About = lazy(() => import('./about'));
// const Contact = lazy(() => import('./contact'));
// const Portfolio = lazy(() => import('./portfolio'));

export default function Page({type, match}) {
  let location = useLocation();
  let pageContent = {
    'engineer': {
      'pageColor' : "green",
      'about': {
        title: 'About',
        text: [
          "I'm a fullstack software engineer and UI/UX Javascript specialist (ES6/React/Redux).",
          "I do my best work in environments where I know that my code is making a positive impact in the world.",
          "My passion is in creating beautiful and performant web experiences.",
          "My extensive experience in web pages for marketing campaigns has served to hone my ability to break down real problems into easy-to-understand actionable tasks.",
        ],
        skills: {
          'Front-end' : ['React', 'Redux', 'Vanilla ES6', 'Karma/Enzyme/Mocha Unit Testing', 'HTML5', 'CSS3', 'SCSS', 'CSS Animations'],
          'Back-end' : ['Ruby on Rails', 'Rspec', 'Node', 'Express', 'MongoDB', 'PostgreSQL'],
          'Other' : ["Responsive Web Design", "AWS", "Terraform", "Heroku", 'Git']
        },
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
      portfolio: [
        {
          name: 'Portfolio Site',
          date: 'July 2020',
          shortDescription: "The site you're on now!",
          tech: ['React', 'Node'],
          image: 'https://i.gyazo.com/c4e865405d4741027e9e4148c44a5ebc.gif',
          liveUrl: 'https://www.andrewtae.com',
          githubUrl: 'https://github.com/atae/andrews-hot-ass-portfolio-site/'
        },
        {
          name: 'RaiseMe Bulk Messaging',
          shortDescription: 'College/Student Bulk Message System',
          date: 'Nov 2019',
          description: [],
          tech: ['AWS SES', 'React', 'Redux', 'Ruby on Rails'],
          image: MessagingScreenshot,
          liveUrl: '',
          githubUrl: ''
        },
        {
          name: 'RaiseMe B2B Marketing Pages',
          date: '2019',
          shortDescription: 'Beautiful Landing Pages for B2B Clients',
          description: [],
          tech: ['HTML, CSS, JS', 'AWS Cloudfront'],
          image: 'https://i.gyazo.com/2739a6675f9c9f9e2a7dfcc4f8968c68.gif',
          liveUrl: 'https://www.raise.me/college/overview',
          githubUrl: '',
        },
        {
          name: 'Hiyoko Jisho',
          date: '2018',
          shortDescription: "Japanese Dictionary based on Heisig's RTK",
          description: [],
          tech: ['React', 'jisho.org API', 'Fuzzy'],
          image: 'https://i.gyazo.com/29a17fa248dd34fb374a0459c57a000f.gif',
          liveUrl: 'https://www.hiyokojisho.com',
          githubUrl: 'https://github.com/atae/jisho-word-builder'
        },
        {
          name: 'Veritas Customer Success',
          date: '2018',
          shortDescription: 'Explore Veritas Customer Stories',
          description: [
            'A one-off application to allow users to search and filter through hundreds of Veritas customers.',
            'This project involved creating a custom API endpoint into the Adobe Experience Manager CMS to access our customer data from the frontend dynamically.'],
          tech: ['React', 'Adobe Experience Manager', 'API Design'],
          image: 'https://i.gyazo.com/33d2c354bce1bd00e39d74f7d5845724.gif',
          liveUrl: 'https://www.veritas.com/customer-success',
          githubUrl: '',
        },
        {
          name: 'Beautiful Typing',
          shortDescription: 'Modern Arcade-Style Typing Game ',
          description: [],
          tech: ['jQuery', 'HTML', 'CSS', 'JS', 'Canvas'],
          image: 'https://www.andrewtae.co/images/beautiful_typing.gif',
          liveUrl: 'https://www.andrewtae.co/BeautifulTyping/beauTyping.html',
          githubUrl: 'https://github.com/atae/BeautifulTyping',
        },
        {
          name: 'Major9',
          shortDescription: 'Musical Storefront for Japanese Jazz',
          description: [
            'Full stack project created during my time at App Academy',
            "It's a Bandcamp clone that I used to host my favorite japanese jazz artists",
            "I'm just happy that it still works to this day"
          ],
          tech: ['React', "Ruby on Rails", "PostgreSQL"],
          image: 'http://www.andrewtae.co/images/major9_home.gif',
          liveUrl: 'http://major9.audio',
          githubUrl: 'https://github.com/atae/major9'
        }
      ],
      contact: [{
        type: 'email',
        icon: '',
        contact: 'andrewtae368@gmail.com'
      }, {
        type: 'phone',
        icon: '',
        contact: '(408) 929-0138'
      }, {
        type: 'github',
        icon: '',
        contact: 'https://www.github.com/atae'
      }, {
        type: 'linkedin',
        icon: '',
        contact: 'https://www.linkedin.com/in/andrew-tae'
      }]
    },
    'music': {
      'pageColor': "white",
      'about': {
        title: 'About',
        text: [" It's music"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    },
    'nerd': {
      'pageColor': 'orange',
      'about': {
        title: 'About',
        text: [" It's nerd"],
        skills: [""],
        image: "https://avatars2.githubusercontent.com/u/10753609?s=460&u=474d9f32aa1c0dd5beaaac5619048b0cbac2e257&v=4"
      },
    }
  }
  let suspenseComponent = (component) => {
    // return (
    //   <Suspense 
    //   fallback={
    //     <div className={`${pageContent[type]['pageColor']}-background-font`}>
    //         Loading...
    //       </div>
    //     }>
    //     {component}
    //   </Suspense>
    // )
    return component;
  }

  let about = () => suspenseComponent(<About pageColor={pageContent[type]['pageColor']} content={pageContent[type]['about']} />);
  let contact = () => suspenseComponent(<Contact pageColor={pageContent[type]['pageColor']} content={pageContent[type]['contact']} />);
  let portfolio = () => suspenseComponent(<Portfolio pageColor={pageContent[type]['pageColor']} content={pageContent[type]['portfolio']} />);

  return (
    <div className="page-container">
      <div className="page">
        <CSSTransitionGroup
          key={location.key}
          classNames="fade"
          timeout={300}
        >
            <Switch location={location}>
                <Route path={`/music/*`} component={() => <h2 className="white-background-font">Under Construction</h2>} />
                <Route path={`/nerd/*`} component={() => <h2 className="orange-background-font">Under Construction</h2>} />
                <Route path={`${match.path}/about`} component={about}/>
                <Route path={`${match.path}/contact`} component={contact}/>
                <Route path={`${match.path}/portfolio`} component={portfolio}/>
            </Switch>
          </CSSTransitionGroup>
      </div>
    </div>
  )
  // {/* </TransitionGroup> */}
}