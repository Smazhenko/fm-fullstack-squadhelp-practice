import React, { Component } from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';

class Footer extends Component {
    topFooterItemsRender = (item) => (
      <div key={item.title}>
        <h4>{item.title}</h4>
        {item.items.map((i) => <p key={i}>{i}</p>)}
      </div>
    );

    topFooterRender() {
      return CONSTANTS.FooterItems.map((item) => this.topFooterItemsRender(item));
    }

    render() {
      return (
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div>
              {this.topFooterRender()}
            </div>
          </div>
        </div>
      );
    }
}

export default Footer;
