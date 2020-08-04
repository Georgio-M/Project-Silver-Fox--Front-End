import  React, {Component} from 'react';
import List from './List'

class Events extends Component{
    state = {
        items: [],
        inputValue: ''
    }
    handleChange = (event) =>{
        const value = event.target.value;

        this.setState(
            {
                inputValue: value
            }
        );
    }

    strike = (index)=> {
        const tempItems = [...this.state.items];
        tempItems[index].isStrike= !tempItems[index].isStrike;
        this.setState(
            {
                items: tempItems
            }
        );

    }

    add = ()=>{
        // shortcut for coping all objects in an array in JS
        const tempItems = [...this.state.items];
        const item ={name: this.state.inputValue, isStrike: false}
        tempItems.push(item);
        this.setState({
            items: tempItems
        });

        this.setState(
            {
                inputValue: ''
            }
        );
    }

    remove = (index) =>{
        const tempItems = [...this.state.items];
        tempItems.splice(index, 1);
        this.setState(
            {
                items: tempItems
            }
        );
    }

    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <input onChange = {this.handleChange} value = {this.state.inputValue} placeholder = "add item here" />
                <button onClick = {this.add}> add</button>
                <List items = {this.state.items} strike= {this.strike}/>
            </div>
        );
    }
}
export default Events;