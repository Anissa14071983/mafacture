import {Notification} from '../../../enteties/notification.js'
import {edit} from '../html/_edit.js'


export var editc = Vue.extend({
	props: ['prop'],
	methods: {
		 edit: async function() {
           this.prop.edit().then((resp) => {
    			})
				.catch((err) => {
					console.error(err);
					alert("Impossible de modifier cette ligne");

				});
        }
	},
  template: edit
})
// register
Vue.component('edit-notification-component', editc)
