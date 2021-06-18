export class Service {


			 	idservice

			 	libelleservice

			 	categorie_service

				prixservice

		    primary = "idservice"

		    fields = ["idservice", "libelleservice", "categorie_service","prixservice"]

		    labels = ["idservice", "libelleservice", "categorie_service","prixservice"]

			//	columns = ["Désignation du service", "prixservice", 'Actions']
				columns = ["libelleservice", "prixservice",'Actions']

    constructor (data) {
		 if(data){
			var keys = Object.keys(data);
			keys.forEach( x => {

				if( this.hasOwnProperty(x)){
					this[x] = data[x]
				}
			})
		}
    }

	async search(x){

		const encoded = encodeURI(API_URI+'services?query='+JSON.stringify(x)+'&limit=5');
		const resp = await axios.get(encoded)
		return resp.data.data;
	}


    async getall(){

       const resp = await  axios.get(API_URI+'services')
       let g  =  resp.data.map(x => new this.constructor(x))
       return g;
    }
		async getInfoServ(a){

			 const resp = await  axios.get(API_URI+'service?id='+a)
			 let g  =  new this.constructor(resp.data)
			 return g;
		}

    async getone(){

       let p = this.primary
       const resp = await  axios.get(API_URI+'service?id='+this[p])
       let g  =  new this.constructor(resp.data)
       return g;
    }

    async edit(){
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"service",

					method: "PATCH",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

    async delete(){

		const resp =  await  axios({

					url: API_URI+"service",

					method: "DELETE",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

    async create(){

		delete this[this.primary];
		delete this.primary;
		delete this.fields;
		const resp =  await  axios({

					url: API_URI+"service",

					method: "POST",

					data: JSON.stringify(this),



		})
        return resp.data;
    }

}
