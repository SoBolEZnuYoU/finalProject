import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
		this.state = {
			amount: ''
		}
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

		const labelItem = document.createElement('label')
		labelItem.className = 'donate-form__input-label'
		labelItem.innerText = 'Введите сумму в $'
		const inputItem = document.createElement('input')
		inputItem.className = 'donate-form__donate-input'
		inputItem.name = 'amount'
		inputItem.type = 'number'
		inputItem.setAttribute('max', '100')
		inputItem.setAttribute('min', '1')
		inputItem.setAttribute('required', '')
		const buttonItem = document.createElement('button')
		buttonItem.className = 'donate-form__submit-button'
		buttonItem.setAttribute('disabled', '')
		buttonItem.type = 'submit'
		buttonItem.innerText = 'Задонатить'

		labelItem.appendChild(inputItem)
		this.$rootElement.append(labelItem, buttonItem)

		this.$input = inputItem
		this.$button = buttonItem

		this.$input.addEventListener('input', this.handleInput.bind(this))
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this))
	}

  handleInput(event) {
    this.state.amount = event.target.value
		this.$button.disabled = (this.isValid) ? false : true
  }

  handleSubmit(event) {
    event.preventDefault()
		if(this.isValid) {
			this.props.onSubmit(Number(this.state.amount))
			this.state.amount = ''
			this.$input.value = ''
		}
  }

	get isValid() {
		if(this.state.amount >= 1 && this.state.amount <= 100) {
			return true
		} else {
			return false
		}
	}
}
