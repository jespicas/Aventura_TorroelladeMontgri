var objPou = ctrl.creaObj(
  "pou",
  ["construccio", "antic"],
   "Un pou anys enrera si podia obtenir aigua, però actualment esta tapiat per una contaminació de les aigues <img src='res/Pou.png' />",
   locInici,
   Ent.Escenario);

   var objCartellCami = ctrl.creaObj(
     "Cartell cami al castell",
     ["cartell"],
      "Un cartell de color verd indicant la dirrecio a seguir per arribar al castell. S'hi pot llegir Castell del Montgrí.",
      locCami,
      Ent.Escenario);

    var objMistos = ctrl.creaObj(
      "Mistos",
      ["caixamistos"],
      "En el terra hi ha una caixa de mistos amb propaganda d'un restaurant local",
      locCreueta,
      Ent.Portable);

    objMistos.preTake = function() {
      return " Aixxx! Casi";
    }
