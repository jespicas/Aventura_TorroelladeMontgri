ctrl.ponTitulo( "Aventures a Torroella de Montgrí" );
ctrl.ponIntro( "<p><h2>Start Adventure</h2><br>\
                <b>\
                \"Adventure\" is an invention by _Espi_ \
                </b><br>\
                <br><i>El <a href=\"http://wiki.caad.es/Proyecto_Vampiro\" \
                target=\"_blank\">proyecto vampiro </a> \
                consiste en recrear una aventura \
                muy sencilla en un nuevo parser, de manera que para el \
                autor experimentado, estas salgan a la luz enseguida. \
                En este caso, el objetivo es demostrar las posibilidades \
                de <a target=\"_blank\" href=\"http://caad.es/baltasarq/prys/fi.js/\">fi.js</a>\
                </i></p>" );
ctrl.ponImg( "res/NightSkyLine.gif" );
ctrl.ponAutor( "_espi_" );
ctrl.ponVersion( "20161001" );

 // LLocs
var locInici = ctrl.lugares.creaLoc( "Inici cami",
                       [ "inici" ],
                       "És un dia asolellat i t'has aixecat amb ganes de caminar.\
                       Estas als peus del massís del Montgrí.\
                       El costat del camí, \
                       si pot observar les restes d'un ${pou, ex pou}. \
                       Si aixecas el cap veus el teu destí, l'imponent Castell de Torroella de Montgrí.\
                       I molt aprop el Cau del Duc, lloc privilegiat i ocupat per nostre antecesors en èpoques prehistòriques."
   );
   locInici.pic = "res/masismontgri.JPG";


   var locCami = ctrl.lugares.creaLoc(
   	"Cami",
   	[ "cami" ],
   	"Comences a pujar per la carretera fins arribar al cami de terra on a la dreta hi ha un ${cartellcami, ex cartell} \
     i una senyal de prohibit cotxes i motocicletes."
   );

   var locCamp = ctrl.lugares.creaLoc(
    "Camp",
    [ "camp" ],
    "Et trobes en un camp i et dones compte que no va enlloc. L'unica sortida que es tornar enrera."
   );

   var locCampOliveras = ctrl.lugares.creaLoc(
    "CampOliveras",
    [ "campoliveras" ],
    "Mires i veus tot un camp d'oliveres."
   );

   var locCamipujada = ctrl.lugares.creaLoc(
   	"Camipujada",
   	[ "camipujada" ],
   	"Comences a enfilar-te cap amunt."
   );

   var locCreueta = ctrl.lugares.creaLoc(
   	"Creueta",
   	[ "creueta" ],
   	"Et pares a la creueta per admirar el paissatge.Al voler pujar a la creueta t'adones que t'han caigut les claus del cotxe al moment que vas per ajupir un esquirol t'agafa les claus."
   );

   var locCamiCau = ctrl.lugares.creaLoc(
   	"CamiCauCastell",
   	[ "camiCauCastell" ],
   	"Continues corrents a veure si atrapes l'esquirol"
   );
   var locCau = ctrl.lugares.creaLoc(
   	"Cau",
   	[ "cau" ],
   	"Veus que l' esquirol s'ha adentrat al cau del duc i tu decideixes adentrar-te a la muntanya. Perseguint l'esquirol trepitges malament sobre unes pedres i rellisques i caus de tal manera que et dones un cop molt fort en el cap.Quan et despertes esta tot emborinat i casi no veus res. Fas una pasa i sens com si la pared d' obris"
   );

   var locCastell = ctrl.lugares.creaLoc(
   	"Castell",
   	[ "castell" ],
   	"Estas al castell pero tu lo que busques es l'esquirol"
   );
   var jugador = ctrl.personas.creaPersona( "Edmundo Dant&eacute;s",
                       [ "jugador" ],
                       "Hu&iacute;do del castillo de If, tienes una pinta \
                       deplorable en este momento.",
                       locInici
   );

   // -- locVestibulo
   locInici.ponSalidaBi( "norte", locCami );
   locCami.ponSalidaBi( "norte", locCamipujada );
   locCami.ponSalidaBi( "oeste", locCamp );

   locCamipujada.ponSalidaBi("norte", locCreueta);
   locCamipujada.ponSalidaBi("oeste", locCampOliveras);

   locCreueta.ponSalidaBi("este", locCamiCau);
   locCamiCau.ponSalidaBi("este", locCastell);
   locCamiCau.ponSalidaBi("sur", locCau);

   ctrl.lugares.ponInicio( locInici );
   ctrl.personas.cambiaJugador( jugador );
