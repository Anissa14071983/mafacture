export const create = /*html*/`
	<div class="modal fade" id="clfModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog modal-lg" role="document">
			<div class="modal-content">
			  <div class="modal-header">
				<h5 class="modal-title">Lignefacture</h5>
				<button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
			  </div>
				 <div class="modal-body">
			  	<form v-on:submit.prevent="create()">

					<div class="row">
						<div class="col-lg-6">
						 <div class="mb-3">
						 <label class="form-label">Service</label>
						 <select class="form-control" v-model="prop.service_idservice" required>
								 <option v-for="item in servs" :value="item.idservice">{{ item.libelleservice}} : {{ item.prixservice}}</option>
						 </select>
							</div>
					 </div>
					 <div class="col-lg-6" >
						 <div class="mb-3">
						 <label class="form-label">Facture</label>
						 <select class="form-control" v-model="prop.facture_id_facture" required>
								 <option v-for="item in facts" :value="item.id_facture" > {{ item.id_facture}} : {{item.client_id_client}}</option>
						 </select>
						 </div>
					 </div>
					 <div class="col-lg-6" >
							<div class="mb-3">
							<label class="form-label">Quantité</label>
							<input type="number"  min="0" class="form-control" v-model="prop.quantite_service" required/>
							 </div>
						</div>
					<!--	<div class="col-lg-6" >
						   <div class="mb-3">
							 <label class="form-label">Total</label>
							 <input type="number"  step="0.1"  class="form-control"  v-model="prop.prix_total" required/>
						    </div>
						 </div>-->

				</div>


				  <div class="modal-footer">
					<a href="#" class="btn btn-link link-secondary" data-dismiss="modal">
					  Fermer
					</a>
					<button type="submit" class="btn btn-success ml-auto">
					  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
					  Enregistrer
					</button>
				  </div>
				</form>
				 </div>
			</div>
		  </div>
		</div>
	`
