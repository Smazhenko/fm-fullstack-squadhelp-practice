import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import { clearUserStore, headerRequest } from '../../actions/actionCreator';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Dashboard</span>
                  </Link>
                </li>
                <li><Link to="/account" style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li>
                  <Link
                    to="#"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
                </li>
                <li><span onClick={this.logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <p>Read Announcement</p>
          </div>
          <div className={styles.loginSignnUpHeaders}>
            <div className={styles.numberContainer}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
              <span><a href='tel:+8773553585'>(877)&nbsp;355-3585 </a></span>
              
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
           <Link to='/'><img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} className={styles.logo} alt="blue_logo" /></Link> 
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li>
                    <span>NAME IDEAS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><p>Beauty</p></li>
                      <li><p>Consulting</p></li>
                      <li><p>E-Commerce</p></li>
                      <li><p>Fashion & Clothing</p></li>
                      <li><p>Finance</p></li>
                      <li><p>Real Estate</p></li>
                      <li><p>Tech</p></li>
                      <li className={styles.last}>
                        <p>More Categories</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>CONTESTS</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><p>HOW IT WORKS</p></li>
                      <li><p>PRICING</p></li>
                      <li><p>AGENCY SERVICE</p></li>
                      <li><p>ACTIVE CONTESTS</p></li>
                      <li><p>WINNERS</p></li>
                      <li><p>LEADERBOARD</p></li>
                      <li className={styles.last}>
                        <p>
                            BECOME A
                            CREATIVE
</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><p>NAMES</p></li>
                      <li><p>TAGLINES</p></li>
                      <li><p>LOGOS</p></li>
                      <li className={styles.last}>
                        <p href="#">TESTIMONIALS</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <li><p>POPULAR NAMES</p></li>
                      <li><p>SHORT NAMES</p></li>
                      <li><p>INTRIGUING NAMES</p></li>
                      <li><p>NAMES BY CATEGORY</p></li>
                      <li><p>VISUAL NAME SEARCH</p></li>
                      <li className={styles.last}>
                        <p href="#">
                            SELL YOUR
                            DOMAINS
</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><p>ULTIMATE NAMING GUIDE</p></li>
                      <li><p>POETIC DEVICES IN BUSINESS NAMING</p></li>
                      <li><p>CROWDED BAR THEORY</p></li>
                      <li className={styles.last}>
                        <p>ALL ARTICLES</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));