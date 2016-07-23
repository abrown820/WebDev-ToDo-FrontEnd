import React from 'react';
import DeleteButton from './DeleteButton';
import MarkComplete from './MarkComplete'
import importanceColour from '../actions/importance'

class Todo extends React.Component {
	constructor(props){
	super(props)
  this.changeDescription = this.changeDescription.bind(this)
	this.submitNewDescription = this.submitNewDescription.bind(this)
}

changeDescription(e){
	if (e.target.value != this.props.description) {
  	this.props.updateTodo(parseInt(e.target.id), e.target.value)
	}
}

submitNewDescription(e){
	if (this.props.status.updatingDescription === true) {
		this.props.asyncUpdateTodo(parseInt(e.target.id), e.target.value.trim())
	}
}

	render() {
		const {
			description,
			status,
			onMarkComplete,
			onDeleteTodo,
			id,
			importance
		} = this.props;
		return (
			<div className="task" style={{
					'backgroundColor': importanceColour(id, importance),
					'opacity': status.deletingTodo ? '0.4' : '1'}}>

				<input value={description} id={id} onChange={this.changeDescription} onBlur={this.submitNewDescription}
					className="description" style={{
					'textDecoration': status.completed
						? 'line-through'
						: 'none',
					'background': 'transparent',
					'border': 'none'}}>
      </input>
				<div className="buttons">
					<MarkComplete onClick={onMarkComplete} completed={status.completed}/>
					<DeleteButton onClick={onDeleteTodo}/>

				</div>
			</div>
		)
	}
}
	export default Todo
