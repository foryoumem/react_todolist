import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentTime } from '../lib/time';
import { styled } from 'styled-components'

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
  text-decoration: ${(props) => props.checked ? "line-through" : "none"};
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

export default function Root(database) {
  // 버튼을 누를때 document를 사용하지 않고 Todo 입력창의 내용을 받을 방법이 없어서 만듬
  const [inputTextValue, setInputTextValue] = useState("")

  const data = database.getData() || "[]"
  const [todolist, setTodolist] = useState(JSON.parse(data))

  // Todo 입력창의 내용이 바뀔때마다 갱신
  const inputTextEvent = (event) => {
    setInputTextValue(event.target.value)
  }

  console.log("컴포넌트 실행")
  useEffect(() => {
    console.log("useEffect(): Dependency array의 요소 변경으로 해당 컴포넌트 그려짐")

    
    database.setData(JSON.stringify(todolist))

    return () => {
      console.log("useEffect(): 컴포넌트 언마운트 또는 업데이트로 지워짐")
    }
  }, [JSON.stringify(todolist)])

  
/*
명예의 전당 배열이
1. k보다 작으면 currentValue를 푸시 > 소트
2. k보다 크면 currentValue가 명예의 전당 요소보다 크면 쉬프트 > 푸시

발표점수 = 명예의 전당의 0번째 인덱스 
*/

  const k = 3
  const score = [10, 100, 20, 150, 1, 100, 200]
  const best = []
  const answer = score.reduce((arr, currentValue) => {
    if (best.length < k) {
      best.push(currentValue)
      if (best.length >= 2) best.sort((a, b) => a - b)
    } else {    
      best.push(currentValue)
      best.sort((a, b) => a - b)
      best.shift()
    }
    arr.push(best[0])
    return arr
  }, [])

  console.log(answer)

  const addButtonEvent = (event) => {
    const todo = {
      id: todolist.length > 0 ? todolist[todolist.length - 1].id + 1 : 1,
      title: inputTextValue,
      create_time: getCurrentTime(),
      complete_time: ""
    }
    
    const list = [...todolist, todo]
    setTodolist(list)
    //database.setData(JSON.stringify(list))
    setInputTextValue("")
  }

  const deleteButtonEvent = (todo, event) => {
    const list = todolist.filter(item => item.id !== todo.id)
    setTodolist(list)
    //database.setData(JSON.stringify(list))
  }

  const todoCheckEvent = (todo, event) => {
    const isChecked = event.target.checked
    if (isChecked) {
      todo.complete_time = getCurrentTime()
    }
    else {
      todo.complete_time = ""
    }
    
    const list = todolist.map(item => item.id === todo.id ? todo : item)
    setTodolist(list)
    //database.setData(JSON.stringify(list))
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
                <TodoLink to={host + "/details/" + iter.id} state={iter} checked={iter.complete_time !== ""}>
                  {iter.title}
                </TodoLink>
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