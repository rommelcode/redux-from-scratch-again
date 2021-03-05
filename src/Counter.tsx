import {useSelector} from 'react-redux'
function Counter(){
    const count = useSelector(state=>state)

    return <div>
        {count}
    <button>Add to counter</button>
    </div>
}

export default Counter;