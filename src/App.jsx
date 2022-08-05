import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css';

export function App() {


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Michel Fonseca"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur dicta dignissimos numquam in animi nisi, quaerat, voluptatum pariatur obcaecati ea! Fuga nulla, earum saepe ut atque repudiandae est doloremque!"
          />
          <Post
            author="Juliana Carvalho"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consectetur dicta dignissimos numquam in animi nisi, quaerat, voluptatum pariatur obcaecati ea! Fuga nulla, earum saepe ut atque repudiandae est doloremque!"
          />
        </main>
      </div>

    </div>
  )
}

