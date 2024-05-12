import styles from './Route.module.css';
import routeImg from '../../../assests/images/r1.jpg';

function Route() {
  return (
    <div className={`row ${styles.route}`}>
      <div className="col-4">
        <img src={routeImg} alt="" className="img-fluid img-thumbnail" />
      </div>
      <div className="col-8 text-left">
        <p>
          Nazwa skały:
          <span className={styles.rockDescription}> Turnia Kukuczki</span>
        </p>
        <p>
          Lokalizacja:
          <span className={styles.rockDescription}> Jura środkowa</span>
        </p>
        <p>
          Współrzędne:{' '}
          <span className={styles.rockDescription}> 51 N, 34E</span>
        </p>
        <p>
          Średnia wycena: <span className={styles.rockDescription}> 6a</span>
        </p>
      </div>
      <div className="col-12">
        {' '}
        <a href="#" className="btn btn-primary mb-3">
          Pokaż drogi
        </a>
        <div className="row">
          <div className={`col-2 ${styles.routeDescription}`}>LP.</div>
          <div className={`col-4 ${styles.routeDescription}`}>Nazwa drogi</div>
          <div className={`col-4 ${styles.routeDescription}`}>
            Ilość przelotów
          </div>
          <div className={`col-2 ${styles.routeDescription}`}>Wycena</div>
        </div>
        <div className="row">
          <div className={`col-2`}>1</div>
          <div className={`col-4`}>Droga pierwsza</div>
          <div className={`col-4`}>
            6 + st
          </div>
          <div className={`col-2`}>6a</div>
        </div>
        <div className="row">
          <div className={`col-2`}>2</div>
          <div className={`col-4`}>Droga druga</div>
          <div className={`col-4`}>
            trad
          </div>
          <div className={`col-2`}>5c</div>
        </div>
        <div className="row">
          <div className={`col-2`}>3</div>
          <div className={`col-4`}>Droga trzecia</div>
          <div className={`col-4`}>
            5 + st
          </div>
          <div className={`col-2`}>7a</div>
        </div>
      </div>
    </div>
  );
}

export default Route;
