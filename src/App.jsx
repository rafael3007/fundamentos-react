import styles from "./App.module.css";
import { Post } from "./components/Post/Post";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

import "./global.css"

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Rafael" content="teasd" />
          <Post author="Rafael" content="teasd" />
        </main>
      </div>
    </div>
  );
}

export default App;
