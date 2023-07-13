import React from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from '../src/components/Post'
import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DEVLucasLopess.png',
      nome: 'Lucas Lopes',
      role: 'Front-end developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋' },
        {type: 'paragraph', content: '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
        {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/johneverton01.png',
      nome: 'John',
      role: 'Web developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋' },
        {type: 'paragraph', content: '"Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
        {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-07-09 20:00:00')
  },
]

//iteração

// author: { avatar_url: "", name: "", role: "" }
// publishAt: Data
// content: string

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar /> 
        </aside>
        <main>
          { posts.map((post) => {
            return (
              <div key={post.id}>
                <Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt} 
                />
              </div>
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
