import React, { Component } from 'react';

const List = (props) => {
    return props.items.map((item, index) =>
        <li >
            <span className = {item.isStrike? 'strike': ''} onClick = {() => props.strike(index)}> {item.name} </span></li>

    );
}

export default List;