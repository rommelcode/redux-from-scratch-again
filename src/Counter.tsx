import { useSelector, useDispatch } from 'react-redux'
function Counter() {
    const count = useSelector(state => state)
    const dispatch = useDispatch();

    function handleCounter() {
        dispatch({
            type: "ADD_TO_COUNTER"
        })
    }

    return <div>
        {count}
        <button onClick={() =>handleCounter}>Add to counter</button>
    </div>
}

export default Counter;