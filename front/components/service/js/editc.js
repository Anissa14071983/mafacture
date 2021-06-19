import {Service} from '../../../enteties/service.js'
import {edit} from '../html/_edit.js'


export var editc = Vue.extend({
	props: ['prop'],
	methods: {
		 edit: async function() {
           this.prop.edit().then((resp) => {
						 console.log(resp)
					 setTimeout( () => $(".modal").modal('hide'), 500 )
    			})
				.catch((err) => {
					console.error(err);
					alert("Impossible de modifier ce service");

				});
        }
	},
  template: edit
})
// register
Vue.component('edit-service-component', editc)
