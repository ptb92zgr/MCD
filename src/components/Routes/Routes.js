import React, { Component } from 'react';
import Route from './Route/Route';
import styles from './Routes.module.css';

class Routes extends Component {
  render() {
    return (
      <div className="container">
        <h2 className={styles.title}>Drogi wspinaczkowe</h2>
        <Route />
        <Route />
        <Route />
      </div>
    );
  }
}

export default Routes;
