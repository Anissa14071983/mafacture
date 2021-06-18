<?php

require_once(__DIR__ ."/model.php");
/**
 * @OA\Schema()
 */
	class Client extends Model{

			function __construct() {
				$this->table = "client";
				$this->primary = "id_client";
			}

   	/**
		     * The client id_client
			 * @var integer
			 * @OA\Property()
			 */
			 public $id_client;
			 /**
		     * The client CIN_client
			 * @var integer
			 * @OA\Property()
			 */
			 public $cin_client;
			 /**
		     * The client Nom_client
			 * @var string
			 * @OA\Property()
			 */
			 public $nom_client;
			 /**
		     * The client Prenom_client
			 * @var string
			 * @OA\Property()
			 */
			 public $prenom_client;
			 /**
		     * The client Adresse_client
			 * @var string
			 * @OA\Property()
			 */
			 public $adresse_client;
			 /**
		     * The client Email_client
			 * @var string
			 * @OA\Property()
			 */
			 public $email_client;

			 /**
				 * The client tel_client
			 * @var integer
			 * @OA\Property()
			 */
			 public $tel_client;
			 /**
 				* The client fax_client
 			* @var integer
 			* @OA\Property()
 			*/
 			public $fax_client;
			/**
			 * The client matricule_fiscale
		 * @var integer
		 * @OA\Property()
		 */
		 public $matricule_fiscale;
		 //Anissa
		 /**
			* The client matricule_fiscale
			*
		* @OA\Property()
		*/
	//	public $client_id_prestataire;

	}

?>
