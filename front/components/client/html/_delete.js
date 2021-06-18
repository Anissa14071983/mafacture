export const del = /*html*/
`
<div class="modal fade"  id="delModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">Supprimer Client</h5>
				<button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
			  </div>
				  <div v-if="prop" class="modal-body">
					<div class="row">
					  <div class="col-lg-6" v-for="(item ,i) in prop.fields">
						<div class="mb-3">
						  <label class="form-label">{{prop.labels[i]}}</label>
						  <span class="form-control">{{prop[item]}}</span>
						</div>
					  </div>
					   <div class="col-lg-6" v-for="(item ,i) in prop.fields">

					  </div>
					</div>
				  </div>
				  <div class="modal-footer">
					<div class="mb-3">
							<button type="button" class="btn btn-danger" @click="del(prop)" >Supprimer</button>
					</div>
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>

				  </div>
					</div>
		  </div>
</div>
`
