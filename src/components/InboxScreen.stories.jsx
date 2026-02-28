import { Provider } from 'react-redux';
import { http, HttpResponse } from 'msw'
import { fireEvent, within, waitFor, waitForElementToBeRemoved } from '@storybook/test';

import store from '../lib/store';

import { MockedState } from './TaskList.stories';

import InboxScreen from './InboxScreen';

export default {
	title: 'InboxScreen',
	component: InboxScreen,
	decorators: [
		(story) => (
			<Provider store={store}>
				{ story() }
			</Provider>
		)
	],
	tags: ['autodocs']
};

export const Default = {
	parameters: {
		msw: {
			handlers: [
				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
					return (
						HttpResponse.json(MockedState.tasks)
					);
				})
			]
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
		await waitFor(async () => {
			await fireEvent.click(canvas.getByLabelText('pinTask-1'));
			await fireEvent.click(canvas.getByLabelText('pinTask-3'));
		});
	}
};

export const Error = {
	parameters: {
		msw: {
			handlers: [
				http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
					return (
						new HttpResponse(null, {
							status: 403,
						})
					);
				})
			]
		}
	}
};
