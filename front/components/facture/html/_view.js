export const view = /*html*/ `
<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog modal-lg" role="document">
 				<div class="modal-content">
              <div class="col-lg-12">
                  <div class="card px-2 border-0 d-print-block">
                      <div class="card-body">
                          <div class="container-fluid">

                            <h3 class="text-right my-5">Facture&nbsp;&nbsp;{{ prop.idfacture }} / {{ prop.etatfacture }}</h3>
                            <hr>
                          </div>
                          <div class="container-fluid d-flex justify-content-between">
                            <div class="col-lg-3 pl-0">
                            <!--  <p class="mt-5 mb-2"><b>Fatourty</b>  </p>-->
														 	<p>	<a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo.png" alt="logo"></a></p>
											       </div>
                          <!--  <div class="col-lg-3 pr-0">
                              <p class="mt-5 mb-2 text-right"><b>Pour</b></p>
                              <p class="text-right">Nom clent:{{ prop.nom_client }}	:{{ prop.prenom_client }}</p>
												   </div>-->
													 <div class="mb-3">
													<label class="form-label">Pour</label>
													<input readonly type="text" class="form-control" v-model="prop.prenom_client" />

													 </div>
                          </div>
                          <div class="container-fluid d-flex justify-content-between">
                            <div class="col-lg-5 pl-2">
                              <p class="mb-0 mt-5">Date Facture : {{ prop.datefacture }}</p>
                            </div>
                          </div>
                          <div class="container-fluid mt-5 d-flex  w-100">
													 <v-client-table :data="prop.lignes" :columns="ligne.columnsembed" />
                            <!--div class="table-responsive w-100">
                                <table class="table">
                                  <thead>
                                    <tr class="bg-dark text-white">
                                        <th>#</th>
                                        <th>Description</th>
                                        <th class="text-right">Quantité</th>
                                        <th class="text-right">Prix Unitaire</th>
                                        <th class="text-right">Total</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="text-right">
                                      <td class="text-left">1</td>
                                      <td class="text-left">Brochure Design</td>
                                      <td>2</td>
                                      <td>$20</td>
                                      <td>$40</td>
                                    </tr>
                                    <tr class="text-right">
                                      <td class="text-left">2</td>
                                      <td class="text-left">Web Design Packages(Template) - Basic</td>
                                      <td>05</td>
                                      <td>$25</td>
                                      <td>$125</td>
                                    </tr>
                                    <tr class="text-right">
                                      <td class="text-left">3</td>
                                      <td class="text-left">Print Ad - Basic - Color</td>
                                      <td>08</td>
                                      <td>$500</td>
                                      <td>$4000</td>
                                    </tr>
                                    <tr class="text-right">
                                      <td class="text-left">4</td>
                                      <td class="text-left">Down Coat</td>
                                      <td>1</td>
                                      <td>$5</td>
                                      <td>$5</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div -->
                          </div>
                          <div class="container-fluid mt-5 w-100">
                           <p class="text-right mb-2"> Total hors taxes:  {{ prop.totalfacture }}DT</p>
                            <p class="text-right">TVA :(1%) </p>
                            <h4 class="text-right mb-5">Total : {{ prop.totalfacture }} DT </h4>
                            <hr>
                          </div>
                          <div class="container-fluid w-100 d-print-none">
                            <button class="btn btn-primary float-right mt-4 ml-2" onclick="window.print()"><i class="ti-printer mr-1"></i>Imprimer</button>
                            <button @click="envoyer()" class="btn btn-success float-right mt-4"><i class="ti-export mr-1"></i>Envoyer Facture</button>
														<hr>
														Le lien de paiement envoyé au client : <a :href="link" target="_blank">{{ link }}</a>
													</div>
                      </div>
                  </div>
              </div>
						</div>
          </div>
		</div>
</div>
`
