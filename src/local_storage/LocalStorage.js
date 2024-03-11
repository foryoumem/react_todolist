const createLocalStorage = (key) => {
    return {
        getData: () => {
            const data = localStorage.getItem(key)
            return JSON.parse(data)
        },
        setData: (data) => {
            if (typeof data === "object") {
                localStorage.setItem(key, JSON.stringify(data))
            } else {
                localStorage.setItem(key, data)
            }           
        }
    }
}

export default createLocalStorage