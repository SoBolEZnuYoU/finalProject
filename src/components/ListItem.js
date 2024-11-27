import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
		this.state = {
			id: Date.now(),
			date: new Date(),
			amount: props.amount
		}
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';

		const deleteButton = document.createElement('button')
		deleteButton.className = 'delete-button'
		deleteButton.innerText = 'Удалить'

		this.$rootElement.innerHTML = `${this.state.date.toLocaleString('en-US', { hour12: false })} - <b> ${this.state.amount}$</b>`
		this.$rootElement.append(deleteButton)
		
		deleteButton.addEventListener('click', this.removeItem.bind(this))
  }

	removeItem(event) {
		const {target} = event
		target.closest('.donate-item').remove()
		this.props.total.innerText -= this.state.amount
	}
}
