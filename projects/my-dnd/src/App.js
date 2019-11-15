import './App.css';
import React, { Component } from 'react'
import '@atlaskit/css-reset';
import styled from 'styled-components';
import initialData from './initial-data'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 50px;
	flex-wrap: wrap;
	align-content: space-between;
	flex-grow: 1;
	max-width: 80%;
	margin: 0 auto;

	@media (max-width: 800px){
		flex-direction: column;
	}
`;

export default class App extends Component {
	state = initialData;

	onDragStart = (start) => {
		document.body.style.color = 'orange';
		document.body.style.transition = 'background-color 0.2s ease';
		// условия для перемещения по порядку колонок
		/*const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
		this.setState({
			homeIndex,
		})*/

	}
	onDragUpdate = update => {
		const { destination } = update;
		const opacity = destination ? (destination.index / Object.keys(this.state.tasks).length) : (0);
		document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
	}
	onDragEnd = result => {
		// условия для перемещения по порядку колонок
		// this.setState({
		// 	homeIndex: null,
		// })
		document.body.style.color = 'inherit';
		document.body.style.backgroundColor = 'inherit';
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}


		if (type === 'column') {
			const newColumnOrder = Array.from(this.state.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...this.state, 
				columnOrder: newColumnOrder,
			}
			this.setState(newState);
			return;
		}
		// -----------------------------ONE COLUMN LOGIC------------------------------ 
		/*const column = this.state.columns[source.droppableId];

		const newTaskIds = Array.from(column.taskIds);

		newTaskIds.splice(source.index, 1);

		newTaskIds.splice(destination.index, 0, draggableId);

		const newColumn = {
			...column,
			taskIds: newTaskIds,
		};

		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newColumn.id]: newColumn,
			},
		};

		this.setState(newState);*/

		// -----------------------------A LOT OF COLUMNS LOGIC------------------------------ 
		const start = this.state.columns[source.droppableId];
		const finish = this.state.columns[destination.droppableId];
		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds);

			newTaskIds.splice(source.index, 1);

			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				taskIds: newTaskIds,
			};

			const newState = {
				...this.state,
				columns: {
					...this.state.columns,
					[newColumn.id]: newColumn,
				},
			};

			this.setState(newState);
			return;
		}

		//--------------MOVING FROM ONE COLUMN TO ANOTHER---------------------------
		const startTaskIds = Array.from(start.taskIds);
		startTaskIds.splice(source.index, 1);
		const newStart = {
			...start,
			taskIds: startTaskIds,
		}
		const finishTaskIds = Array.from(finish.taskIds);
		finishTaskIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			taskIds: finishTaskIds,
		}
		const newState = {
			...this.state,
			columns: {
				...this.state.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			}
		}
		this.setState(newState);
	};

	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart} onDragUpdate={this.onDragUpdate}>
				<Droppable
					droppableId="all-columns"
					// direction="horizontal"
					type="column"
				>
					{(provided) => (
						<Container 
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{
								this.state.columnOrder.map((columnId, index) => {
									const column = this.state.columns[columnId];
									const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

									// const isDropDisabled = index < this.state.homeIndex;// условия для перемещения по порядку колонок


									return <Column key={column.id}
										column={column}
										tasks={tasks}
										index={index}
									// isDropDisabled={isDropDisabled}// условия для перемещения по порядку колонок

									/>
								})
							}
							{provided.placeholder}
						</Container>
					)}
				</Droppable>
			</DragDropContext>
		)
	}
}

