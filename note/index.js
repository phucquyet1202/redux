// REDUCERS
// là 1 function
// lưu ý không được viết code bất đồng bộ, các REQUEST tới SERVER trong hàm Reducer
// không được sử dụng các hàm tính toán ngẫu nhiên như Math.random(),... trong hàm Reducer
// vì khi sử dụng redux ta BẮT BUỘC phải dự đoán được kết quả state trả về.
const innitValue = { value: 0 }
const rootReducer = (state = innitValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: action.value + 1
            }
        case 'todoList':
            return {
                ...state,
                value: state.value + action.payload
            }
        default: return 'ko co truong hop nao'
    }
}

// ACTION
const INCREMENT = {
    type: 'todoList',
    payload: 10,
}
// action creators
const increamentCreator = (data) => {
    return {
        type: 'todoList',
        payload: data,
    }
}
increamentCreator(10)
// DISPATCH
// là 1 function
dispatch(increamentCreator(15))