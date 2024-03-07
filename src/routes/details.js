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
`;

const ContentDataArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentDate = styled.div`
  color: #6c757d;
  font-size: 14px;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  background-color: #5675d9;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6268;
  }
  `;

export default function Detail() {

  const params = useParams()
  console.log(params)

  const location = useLocation()
  const data = location.state
  console.log(data)

  

  return (
    <TodoDetail className="todo-detail">
      <BackButton to="http://localhost:3000/">뒤로가기</BackButton>
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