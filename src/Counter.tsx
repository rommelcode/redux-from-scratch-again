import { useSelector, useDispatch } from 'react-redux'
function Counter() {
    const count = useSelector(state => state)
    const dispatch = useDispatch();

    function handleCounter() {
        console.log('handle counter')
        dispatch({
            type: "ADD_TO_COUNTER"
        })
    }

    return <div>
        {count}
        <button onClick={() => dispatch({type:"ADD_TO_COUNTER"})}>Add to counter</button>
    </div>
}

export default Counter;