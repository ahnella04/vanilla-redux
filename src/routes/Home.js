import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
    // console.log(props) // react-router로부터 받은 props과 getCurrentState로부터 받은 props
    // console.log(rest)
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        addToDo(text)
        setText();
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
            </form>
            <ul>
                {toDos.map(toDo => (
                    <ToDo text={...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

function mapStateToProps(state) {
    // console.log(state, ownProps); // ownProps는 React-Router로부터 받은 인자
    return { state }; //여기서 무엇을 return하든 간에 너의 component의 props에 추가될 거임
}

function mapDispatchToProps(dispatch) {
    // console.log(dispatch)
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text)) // 이 함수는 text argument가 필요하고 
    }
}

// mapStoreToProps의 의미는 store로부터 인자를 가져오고 싶다는 뜻
// connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해 줌
export default connect(mapStateToProps, mapDispatchToProps)(Home); // 이제 우리는 getCurrentState 함수 이용해서 store로부터 state에 전해줄거임 (Home에다가)
// ===> store와 component를 connect하는 방법
// ===> Redux state로부터 Home(component)에 prop으로써 전달하는 거임