export const all = /*html*/ `
<div class="main-panel">
<div class="content-wrapper ">
      <div class="row d-print-none">
        <div class="card w-100">
          <div class="card-header">

            <h4 class="card-title">Lignefactures</h4>
          </div>
          <div class="card-body w-100">
          <div class="card-description d-flex">
            <div class="col-auto ml-auto d-print-none">
                <div class="btn-list">
                    <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-toggle="modal" data-target="#clfModal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Nouvelle Lignefacture
                    </a>
                </div>
            </div>
        </div>

<div class="table-responsive">
<v-server-table ref="table" :url="api_url+'lignefactures'" :columns="prop.columns"  :options="options">
  <div class="btn-list flex-nowrap" slot="Actions" slot-scope="{row}">
    <button type="button" class="btn btn-sm btn-white" data-toggle="modal" data-target="#viewModal" @click="view(row)">Consulter</button>
    <button type="button" class="btn  btn-sm btn-primary" data-toggle="modal" data-target="#editModal" @click="view(row)">Modifier</button>
    <button type="button" class="btn btn-sm btn-danger"  data-toggle="modal" data-target="#delModal" @click="view(row)">Supprimer</button>
  </div>
</v-server-table>
</div>
</div>
</div>
  </div>
<create-lignefacture-component ></create-lignefacture-component>
<view-lignefacture-component :prop="prop"></view-lignefacture-component>
<edit-lignefacture-component :prop="prop"></edit-lignefacture-component>
<del-lignefacture-component :prop="prop"></del-lignefacture-component>
  </div>
	</div>`
