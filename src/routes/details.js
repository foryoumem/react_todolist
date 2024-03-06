import { useLocation, useParams } from "react-router-dom"

export default function Detail() {

  const params = useParams()
  console.log(params)

  const location = useLocation()
  const data = location.state
  console.log(data)

  return (
    <div className="todo-detail">
      <div>제목: {data.title}</div>
      <div>작성: {data.create_time}</div>
      <div>완료: </div>
    </div>
  )
}