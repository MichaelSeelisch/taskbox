import { Provider } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import TaskList from './TaskList';

import * as TaskStories from './Task.stories';

export const MockedState = {
	tasks: [
		{...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
		{...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
		{...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
		{...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
		{...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
		{...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
	],
	status: 'idle',
	error: null
}

const MockedStore = ({ taskboxState, children }) => {
	return (
		<Provider
			store={configureStore({
				reducer: {
					taskbox: createSlice({
						name: 'taskbox',
						initialState: taskboxState,
						reducers: {
							updateTaskState: (state, action) => {
								const { id, newTaskState } = action.payload;
								const task = state.tasks.findIndex(task => task.id === id);

								if (task >= 0) {
									state.tasks[task].state = newTaskState;
								}
							}
						}
					}).reducer
				}
			})}
		>
			{ children }
		</Provider>
	);
}


export default {
	title:'TaskList',
    component: TaskList,
    decorators:[(story) => {
		return (
			<div style={{padding:'3rem'}}>
				{story()}
			</div>
		);
	}],
    tags: ['autodocs'],
	excludeStories: /.*MockedState$/
}

export const Default = {
    decorators: [(story) => {
		return (
			<MockedStore taskboxState={MockedState}>
				{story()}
			</MockedStore>
		);
	}]
};

export const Loading = {
	decorators: [
		(story) => {
			return (
				<MockedStore
					taskboxState={{
						...MockedState,
						status: 'loading'
					}}
				>
					{story()}
				</MockedStore>
			)
		}
	]
};

export const WithPinnedTasks = {
    decorators: [
		(story) => {
			const pinnedTasks = [
				...MockedState.tasks.slice(0, 5),
				{
					id: '6',
					title: 'Task 6 (pinned)',
					state: 'TASK_PINNED'
				}
			];

			return (
				<MockedStore
					taskboxState={{
						...MockedState,
						tasks: pinnedTasks
					}}
				>
					{story()}
				</MockedStore>
			)
		}
	]
};

export const Empty = {
    decorators: [
		(story) => {
			return (
				<MockedStore
					taskboxState={{
						...MockedState,
						tasks: []
					}}
				>
					{story()}
				</MockedStore>
			)
		}
	]
};
