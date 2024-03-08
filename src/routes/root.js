import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getCurrentTime } from '../lib/time';
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd, todoDelete, todoCheck } from '../redux/todolist/todolistSlice'

const host = "http://localhost:3000"

const HeaderArea = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #333;
`

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const TodoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border-top: 1px solid #dcdcdc;
`

const TodoInput = styled.input`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
`

const TodoAddButton = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  font-size: 16px;
  color: white;
  background: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
`

const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  width: 100%;
`

const TodoCheckbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`

const TodoLink = styled(Link)`
  flex-grow: 1;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TodoLinkthrough = styled(Link)`
  flex-grow: 1;
  text-decoration: line-through;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TodoDeleteButton = styled.button`
  margin-left: 10px;
  padding: 5px;
  color: white;
  background: #ff0000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
`

export default function Root(props) {
  // 버튼을 누를때 document를 사용하지 않고 Todo 입력창의 내용을 받을 방법이 없어서 만듬
  const [inputTextValue, setInputTextValue] = useState("")
  const todolist = useSelector(state => state.todolist.value)
  const dispatch = useDispatch()

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
    
    dispatch(todoAdd(todo))
    setInputTextValue("")
  }

  const deleteButtonEvent = (todo, event) => {
    dispatch(todoDelete(todo.id))
  }


  const todoCheckEvent = (todo, event) => {
    const isChecked = event.target.checked
    const list = {...todo}
    if (isChecked) {
      list.complete_time = getCurrentTime()
    }
    else {
      list.complete_time = ""
    }
    
    dispatch(todoCheck(list))
  }

  return (
    <div className="App">
      <HeaderArea>Todolist</HeaderArea>
      <InputArea>
        <TodoInput value={inputTextValue} onChange={inputTextEvent}></TodoInput>
        <TodoAddButton onClick={addButtonEvent}>추가</TodoAddButton>
      </InputArea>
      <TodoArea>
        {
          todolist.map(iter => {
            return (
              <TodoItem key={iter.id}>
                <TodoCheckbox type="checkbox" onClick={(event) => todoCheckEvent(iter, event)}></TodoCheckbox>
                {
                  iter.complete_time === "" ?
                  <TodoLink to={host + "/details/" + iter.id} state={iter}>
                    {iter.title}
                  </TodoLink> : 
                  <TodoLinkthrough to={host + "/details/" + iter.id} state={iter}>
                    {iter.title}
                  </TodoLinkthrough>
                }
                <TodoDeleteButton onClick={(event) => deleteButtonEvent(iter, event)}>삭제</TodoDeleteButton>
              </TodoItem>
            )
          })
        }
      </TodoArea>
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

/*
상세페이지에서도 삭제 기능 구현

1. props를 사용하여
2. local storage를 사용하여
3. redux를 사용하여

*/