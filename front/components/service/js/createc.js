import {Service} from '../../../enteties/service.js'
import {create} from '../html/_create.js'


export var createc = Vue.extend({
	data: function () {
		return {
			prop: new Service()
			}
	},
	methods: {
		create : async function(){
					console.log(this.prop)
          this.prop.create().then((resp) => {
						console.log(resp)
					setTimeout( () => $(".modal").modal('hide'), 500 )
       })
		}
	},
	template: create
})
// register
Vue.component('create-service-component', createc)
