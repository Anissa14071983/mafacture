import {Client} from '../../../enteties/client.js'
import {del} from '../html/_delete.js'


export var deletec = Vue.extend({
	props: ['prop'],
	methods: {
		del : async function(a){
				this.prop.delete(a).then((resp) => {
				console.log(resp)
        setTimeout( () => $(".modal").modal('hide'), 500 )
				})
				.catch((err) => {
					console.error(err);
					alert("Impossible de supprimer ce client"); 
			});
		}
	},
  template: del
})
// register
Vue.component('del-client-component', deletec)
