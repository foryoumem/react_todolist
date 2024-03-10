import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from "./routes/root.js";
import Detail from './routes/details.js';
import createLocalStorage from './local_storage/LocalStorage.js'

function App() {
  const todolist = createLocalStorage("todolist")

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root getData={todolist.getData} setData={todolist.setData}/>} />
                <Route path="/details/:detailsId" element={<Detail getData={todolist.getData} setData={todolist.setData} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App


// https://reactrouter.com/en/main/router-components/browser-router

// 배열에 사용하는 map filter 등등
// 1. probs 상세페이지에서도 지우기
// 2. localstorage 사용해보기
// 3. redux 적용하기