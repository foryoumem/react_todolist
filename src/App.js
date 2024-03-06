import './App.css';
import { useState } from 'react';
//import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const todolist = [{
  'id': 1,
  'title': "안녕하세요",
  'content': "안녕"
}, {
  'id': 2,
  'title': "반갑습니다",
  'content': "반갑"
}]

function App() {
  // 버튼을 누를때 document를 사용하지 않고 Todo 입력창의 내용을 받을 방법이 없어서 만듬
  const [inputTextValue, setInputTextValue] = useState("")

  // Todo 입력창의 내용이 바뀔때마다 갱신
  const inputTextEvent = (event) => {
    setInputTextValue(event.target.value)
  }



  const addButtonEvent = (event) => {
    const length = todolist.length
    const todo = {}
    todo.id = length + 1
    todo.value = inputTextValue

    todolist.push(todo)
    console.log(todolist)
  }

  const todoEvent = (event) => {
    const location = document.location
    const url = new URL(location.href)

    console.log(url.searchParams.get('id'))
  }

  return (
    <BrowserRouter>
      <div className="App">
        <input className="text" onChange={inputTextEvent}></input>
        <button className="add" onClick={addButtonEvent}>추가</button>
        {
          todolist.map(iter => {
            return (
              <Link key={iter.id} to={"http://localhost:3000/info.html/" + iter.id}>
                <div onClick={todoEvent}>{iter.title}</div>
              </Link>
            )
          })
        }
      </div>
    </BrowserRouter>

  );
}




export default App;


// 리액트 화면 바꾸는방법


/*
추가 삭제까지 가능한 투두리스트

todo를 클릭했을 때 상세페이지가 보여야 함

styled component를 사용해서 UI가 깔끔하게 flex 사용

javascript 프로그래머스

reduce map split 사용해보기

객체 구조분해할당

리액트로 만들고 싶은 것 생각해오기
*/