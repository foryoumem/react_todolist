const createLocalStorage = (key) => {
    return {
        getData: () => {
            return localStorage.getItem(key)
        },
        setData: (data) => {
            localStorage.setItem(key, data)
        }
    }
}

export default createLocalStorage