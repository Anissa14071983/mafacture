import {Client} from '../../../enteties/client.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var ClientComponent = Vue.extend({
	data: function () {
		return {
			prop: new Client(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Clients|{count} Clients|Un seul client",
						limit: 'Clients Par Page',
						filterBy: ""
					},
					headings: {

						"cin_client":"CIN",

					  "nom_client":"Nom",

					  "prenom_client":"Prénom",

					  "adresse_client":"Adresse",

					  "email_client":"Email",

					  "matricule_fiscale":"Matricule fiscale", //si le client est une société

					  "tel_client": "Tel",

					  "fax_client":"Fax"


					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
			view: async function(a) {
          this.prop = await new Client().getone(a.id_client)
      }
	},
	mounted: function () {
		let self = this
		$(".modal").on("shown.bs.modal", function () {
	    if ($(".modal-backdrop").length > 1) {
	        $(".modal-backdrop").not(':first').remove();
	    }
	  })
		$(".modal").on("hide.bs.modal.bs.modal", function () {
			$(".modal-backdrop").remove();
			self.$refs.table.refresh();
		})
		console.log(self.$refs)
	},
	template: all
})
// register
Vue.component('client-component', ClientComponent)
