import {Facture} from '../../../enteties/facture.js'
import {all} from '../html/_index.js'
import {createc} from './createc.js'
import {editc} from './editc.js'
import {deletec} from './deletec.js'
import {viewc} from './viewc.js'

export var FactureComponent = Vue.extend({
	data: function () {
		return {
			prop: new Facture(),
			options: {
					texts: {
						filter: "Filtre:",
						count:  "Affichage de {from} à {to} des {count} Factures|{count} Factures|une seule facture",
						limit: 'Factures Par Page',
					
					},
					headings: {
							"totalfacture" : "Total",
							 "datefacture" :"Date" ,
							 "client_id_client" : "Client",
							 "etatfacture" : "Etat"
					},
					filterByColumn:true,
					perPageValues: [10, 25, 50, 100],
					debounce : 500
				}
			}
	},
	methods: {
		view: async function(a) {
          this.prop = await new Facture(a).getone()
        },
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
Vue.component('facture-component', FactureComponent)
