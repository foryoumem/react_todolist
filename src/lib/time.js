export function getCurrentTime()
{
    const date = new Date()

    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const seconds = String(date.getSeconds()).padStart(2, "0")

    return `${hours}:${minutes}:${seconds}`
}

export function getDate()
{
    const date = new Date()
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '긑요일', '토요일']
    const days_num = date.getDay()

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const week = days[days_num]

    return `${year}년 ${month}월 ${day}일 ${week}`
}