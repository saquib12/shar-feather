import React from 'react';
import Carousel from '../Carousel';
import '../../index.css';
import { Link } from 'react-router-dom';

const Landing = () => (
  <React.Fragment>
    <Carousel />

    <div className="BlockContainer">
      <div className="Block">
        <div className="BlockHeader">Citizen's Corner</div>
        <div className="BlockContent">
          <ul>
            <li>
              {' '}
              <Link to="complaint-portal">
                Inform About Missing/Found Children
              </Link>
            </li>
            <li>
              {' '}
              <Link to="search-missing">
                Search a Missing/Found Children
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="Block">
        <div className="BlockHeader">Useful Links</div>
        <div className="BlockContent">
          <ul>
            <li>Photographs of Missing/Found Children</li>
            <li>
              <Link to="/complaint-status">
                Check The Status of Your Complaint of a Missing Child
              </Link>
            </li>
            <li>Quick Search</li>
            <li>
              <a
                href="http://164.100.163.212/cciregistration/index.php"
                target="_blank"
                rel="noreferrer"
              >
                Online Registration of Child Care Institutions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="Block">
        <div className="BlockHeader">Login Section</div>
        <div className="BlockContent">
          <ul>
            <li>Police</li>
            <li>Citizen</li>
          </ul>
        </div>
      </div>
      <div className="Block">
        <div className="BlockHeader">Today's Statistics</div>
        <div className="BlockContent">
          <ul>
            <li>Link to statistics</li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Landing;
