import React from "react";
import '../styles/style.css';
import '../styles/style1.css';
import connect from '../styles/connect.png';
import campus from '../styles/campus.png';
import discoverlosttreasures from '../styles/discover-lost-treasures.png';
import areyoutiredoflookingforyourloststuffoncampusdoyou from '../styles/are-you-tired-of-looking-for-your-lost-stuff-on-campus-do-you.png';
import getstarted from '../styles/get-started.png';
import jecrc1 from '../styles/jecrc-1.png';
import  a from '../styles/image-24.png';
import  b from '../styles/image-22.png';
import  c from '../styles/lost-found.png';
import  d from '../styles/report-lost-items-with-details-and-a-photo-let-fellow-students.png';
import  e from '../styles/marketplace.png';
import  f from '../styles/explore-listings-or-create-your-own-for-buying-and-selling-conn.png';
import  g from '../styles/safety-measures.png';
import  h from '../styles/rest-easy-knowing-that-campusconnect-prioritises-safety-with-use.png';
import  i from '../styles/notifications.png';
import  j from '../styles/get-real-time-updates-on-lost-item-matches-messages-from-buyers.png';
import  k from '../styles/why-choose-campusconnect.png';
import  l from '../styles/vector-17.png';
import  m from '../styles/connect-with-fellow-students-enhancing-the-sense-of-community-a.png';
import  n from '../styles/affordability.png';
import  t from '../styles/discover-budget-friendly-deals-on-study-materials-electronics.png';
import  u from '../styles/efficency.png';
import  o from '../styles/quickly-report-lost-items-or-find-listings-with-our-user-friendl.png';
import  p from '../styles/image-23.png';
import  r from '../styles/image-25.png';
import  v from '../styles/trust.png';
import  s from '../styles/how-it-works.png';
function Home(){
    return (
          <>
        <div className="desktop">
        <div className="div">
          {/* <div className="overlap-group">
            <img className="home" alt="Home" src="img\home.png" />
            <img className="lost-found" alt="Lost found" src="img\lost-found.png" />
            <img className="store" alt="Store" src="img\store.png" />
            <img className="login" alt="Login" src="img\login.png" />
            <div className="overlap">
              <img className="sign-up" alt="Sign up" src="img\sign-up.png" />
            </div>
            <img className="campus-connect" alt="Campus connect" src="img\campusconnect.png" />
          </div> */}
          <img className="CONNECT" alt="Connect" src={connect} />
          <img className="CAMPUS" alt="Campus" src={campus} />
          <img className="discover-lost" alt="Discover lost" src={discoverlosttreasures} />
          <img
            className="are-you-tired-of"
            alt="Are you tired of"
            src={areyoutiredoflookingforyourloststuffoncampusdoyou} />
          <div className="get-started-wrapper">
            <img className="get-started" alt="Get started" src={getstarted}/>
          </div>
          <img className="jecrc" alt="Jecrc" src={jecrc1} />
        </div>
        </div>
        <div className="desktop-1">
        <div className="div-1">
        <div className="overlap">
          <img className="image" alt="Image" src={a} />
          <img className="img" alt="Image" src={b} />
        </div>
        <div className="overlap-group">
          <img className="lost-found" alt="Lost found" src={c} />
          <img
            className="report-lost-items"
            alt="Report lost items"
            src={d}
          />
          <img className="marketplace" alt="Marketplace" src={e}/>
          <img
            className="explore-listings-or"
            alt="Explore listings or"
            src={f}
          />
          <img className="safety-measures" alt="Safety measures" src={g} />
          <img
            className="rest-easy-knowing"
            alt="Rest easy knowing"
            src={h}
          />
          <img className="notifications" alt="Notifications" src={i} />
          <img
            className="get-real-time"
            alt="Get real time"
            src={j}
          />
        </div>
        <img className="why-choose" alt="Why choose" src={k} />
        <img className="vector" alt="Vector" src={l}/>
        <img className="trust" alt="Trust" src={v}/>
        <img
          className="connect-with-fellow"
          alt="Connect with fellow"
          src={m}
        />
        <img className="affordability" alt="Affordability" src={n} />
        <img
          className="discover-budget"
          alt="Discover budget"
          src={t}
        />
        <img className="efficency" alt="Efficency" src={u} />
        <img
          className="quickly-report-lost"
          alt="Quickly report lost"
          src={o}
        />
        <div className="overlap-group-2">
          <img className="image-2" alt="Image" src={p} />
          <img className="image-3" alt="Image" src={r} />
        </div>
        <img className="how-it-works" alt="How it works" src={s} />
      </div>
      </div>
      </>
    );
}

export default Home;