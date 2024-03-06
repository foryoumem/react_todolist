import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const todolist = [{
  'id' : "1",
  'title' : "안녕하세요"
}, {
  'id' : "2",
  'title' : "반갑습니다"
}]

function App()
{
  //const [setText, setTextValue] = useState("")
  const text = document.getElementsByClassName("text")[0]

  const addButtonEvent = () =>
  {
    const length = todolist.length
    const todo = {}
    todo.id = length
    todo.value = text.value

    todolist.push(todo)
  }

  const todoEvent = (event) =>
  {
    const id = event.target.innerText

    const location = document.location
    const url = new URL(location.href)

    console.log(url.searchParams.get('id'))
    
  }

  return (
    <div className="App">
      <input className="text"></input>
      <button className="add" onClick={addButtonEvent}>추가</button>
      {
        todolist.map(iter =>
        {
          return <a href={"http://localhost:3000/info.html/" + iter.id}><div onClick={todoEvent}>{iter.id}</div></a>
        })
      }
    </div>
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