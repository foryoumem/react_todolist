import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getCurrentTime } from '../lib/time';

const host = "http://localhost:3000"

export default function Root() {
  // 버튼을 누를때 document를 사용하지 않고 Todo 입력창의 내용을 받을 방법이 없어서 만듬
  const [inputTextValue, setInputTextValue] = useState("")
  const [todolist, setTodolist] = useState([])

  // Todo 입력창의 내용이 바뀔때마다 갱신
  const inputTextEvent = (event) => {
    setInputTextValue(event.target.value)
  }

  
  const addButtonEvent = (event) => {
    const todo = {
      id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
      title: inputTextValue,
      create_time: getCurrentTime(),
      complete_time: ""
    }

    todolist.push(todo)
    
    setTodolist(todolist)
    setInputTextValue("")
  }

  const deleteButtonEvent = (todo, event) => {
    setTodolist(todolist.filter(item => item.id !== todo.id))
  }

  const todoCheckEvent = (todo, event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      console.log("check")
      todo.complete_time = getCurrentTime()
    }
    else {
      console.log("nocheck")
      todo.complete_time = ""
    }
    
    setTodolist(todolist.map(item => item.id === todo.id ? todo : item))
    console.log(todolist)
  }

  return (
    <div className="App">
      <div className="input-area">
        <input className="input-text" value={inputTextValue} onChange={inputTextEvent}></input>
        <button className="input-add" onClick={addButtonEvent}>추가</button>
      </div>
      <div className="todo-area">
        {
          todolist.map(iter => {
            return (
              <div className="todo-item" key={iter.id}>
                <input className="todo-check" type="checkbox" onClick={(event) => todoCheckEvent(iter, event)}></input>
                <Link className="todo-text" to={host + "/details/" + iter.id} state={iter}>
                  {iter.title}
                </Link>
                <button className="todo-delete" onClick={(event) => deleteButtonEvent(iter, event)}>삭제</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}


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