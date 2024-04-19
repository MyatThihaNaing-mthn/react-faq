import { useState } from 'react'
import './App.css'
import './styles.css'
import './components/MainDiv'
import { getImageUrl } from './utils'
import Main from './components/MainDiv'
import FaqList from './components/FaqList'
import FaqContainer from './components/FaqContainer'

const faqs = [
  {
    "id" : "0",
    "question" : " What is Frontend Mentor, and how will it help me?",
    "answer" : "  Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    "id" : "1",
    "question" : " Is Frontend Mentor free?",
    "answer" : "  Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    "id" : "2",
    "question" : "Can I use Frontend Mentor projects in my portfolio?",
    "answer" : "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    "id" : "3",
    "question" : "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    "answer" : "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
];
function App() {
  return (
    <>
      <Main backgroundImageUrl={getImageUrl('bg.svg')}/>
      <FaqContainer>
      <FaqList faqList={faqs}/>
      </FaqContainer>
    </>  
  );
}

export default App
