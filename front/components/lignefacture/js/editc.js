import {Lignefacture} from '../../../enteties/lignefacture.js'
import {edit} from '../html/_edit.js'


export var editc = Vue.extend({
	props: ['prop'],
	methods: {
		 edit: async function() {
           this.prop.edit().then((resp) => {
						 console.log(resp)//Anissa a enlever apres les tests
 					  setTimeout(() => $(".modal").modal('hide'), 500 )
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
Vue.component('edit-lignefacture-component', editc)
