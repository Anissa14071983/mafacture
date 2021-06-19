import {Notification} from '../../../enteties/notification.js'
import {del} from '../html/_delete.js'


export var deletec = Vue.extend({
	props: ['prop'],
	methods: {
		del : async function(){
				this.prop.delete().then((resp) => {
				})
				.catch((err) => {
					console.error(err);
					alert("Impossible de supprimer cette notification");

			});
		}
	},
  template: del
})
// register
Vue.component('del-notification-component', deletec)
