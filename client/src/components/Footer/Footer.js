import React from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';

const Footer = (props)=> {
   const topFooterItemsRender = (item) => (
      <div key={item.title}>
        <h4>{item.title}</h4>
        {item.items.map((i) => <p key={i}>{i}</p>)}
      </div>
    );

   const topFooterRender = ()=> {
      return CONSTANTS.FooterItems.map((item) => topFooterItemsRender(item));
    }
      return (
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div>
              {topFooterRender()}
            </div>
          </div>
        </div>
      );
}

export default Footer;
