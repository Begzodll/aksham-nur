import axios from "axios";
const ApiMiddleware = ({dispatch})=>(next)=>(action)=>{

    if( action.type !== 'api/apiCall' ){
        next(action)
        return
    }

    next(action)

    const { url, method,data, onSuccess, onFail } = action.payload
    axios({
        baseURL:'http://18.183.248.93',
        url,
        method,
        data
    }).then(res => {
        dispatch({
            type:onSuccess,
            payload:res.data
        })
    }).catch(err => {
        dispatch({
            type:onFail,
            payload:err.data
        })
    })
}
export default ApiMiddleware
