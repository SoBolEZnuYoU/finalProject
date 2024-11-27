import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
		this.state = {
			total: 0,
			donates: []
		}
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

		const totalAmount = document.createElement('h1')
		totalAmount.className = 'total-amount'
		totalAmount.innerText = 'Итого: $'
		const totalSpan = document.createElement('span')
		totalSpan.innerText = this.state.total
		totalAmount.appendChild(totalSpan)
		
		this.$rootElement.appendChild(totalAmount)
		this.$total = totalSpan
    
    const donateForm = new Form({onSubmit: this.onItemCreate.bind(this)});
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
		this.donateList = donateList
  }
  
  onItemCreate(amount) {
		const item = new ListItem({amount: amount, total: this.$total})
		this.state.donates.push(item)
		this.donateList.addItem(item)

		this.state.total += amount
		this.$total.innerText = this.state.total
  }
}

