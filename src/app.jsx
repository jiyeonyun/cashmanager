import styles from './app.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import List from './components/list/list';
import Popup from './components/popup/popup';
import Total from './components/total/total';
function App() {
  return (
    <div className={styles.wrap}>
      <div className={styles.innerWrap}>
        <Header/>
        <Total/>
        <List/>
        <Footer/>
        {/* <Popup/> */}
      </div>
    </div>
  );
}

export default App;
