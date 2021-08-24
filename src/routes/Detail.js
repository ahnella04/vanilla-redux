import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
    // console.log(props)
    const id = useParams();
    // console.log(id);
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps) {
    const { match: { params: { id } } } = ownProps;
    // console.log(ownProps);
    // console.log(id);
    return { toDo: state.find(toDo => toDo.id === parseInt(id)) }
}

export default connect(mapStateToProps)(Detail);