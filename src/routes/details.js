import { useLocation, useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

const TodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
const Content = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`

const ContentDataArea = styled.div`
  display: flex;
  justify-content: space-between;
`

const ContentDate = styled.div`
  color: #6c757d;
  font-size: 14px;
`

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #5675d9;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
`

const DeleteButton = styled(Link)`
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #d9534f;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c9302c;
  }
`

export default function Detail() {

  const params = useParams()
  const detaildId = params.detailsId

  const location = useLocation()
  const data = location.state

  const deleteButtonEvent = () => {
    const todolist = JSON.parse(localStorage.getItem("todolist"))
    const list = todolist.filter(item => item.id !== detaildId)
    localStorage.setItem("todolist", JSON.stringify(list))
  }
  
  return (
    <TodoDetail>
      <div>
      <BackButton to="http://localhost:3000/">뒤로가기</BackButton>
      <DeleteButton to="http://localhost:3000/" onClick={deleteButtonEvent}>삭제</DeleteButton>
      </div>
      <Content>{data.title}</Content>
      <ContentDataArea>
        <ContentDate>작성: {data.create_time}</ContentDate>
        {
          data.complete_time !== "" ?
          <ContentDate>완료: {data.complete_time}</ContentDate> :
          <div></div>
        }
      </ContentDataArea>
    </TodoDetail>
  )
}