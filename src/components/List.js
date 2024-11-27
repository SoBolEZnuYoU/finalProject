import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const titleItem = document.createElement('h2')
		titleItem.className = 'donates-container__title'
		titleItem.innerText = 'Список донатов'
		const donatesListItem = document.createElement('div')
		donatesListItem.className = 'donates-container__donates'

		this.$rootElement.append(titleItem, donatesListItem)
		this.$listContainer = donatesListItem
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}