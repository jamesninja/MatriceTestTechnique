function search_Z(text) {
   let count = 0;
   
  //texte chaine de caractere
  let mot =(" dsgdfg dsgd z");
   let pos= (mot.toUpperCase()).indexOf("Z");// La méthode indexOf()renvoie le premier indice pour lequel on trouve un élément sinon la methode renverra -1 
   //la methode toUpperCase() permet de mettre toute les lettre en majuscule  
   while ( pos != -1) {
      count++;
      pos=(mot.toUpperCase()).indexOf( "Z",pos + 1 );
      
   };
  
   console.log(`Il y a ${count} Z`);
   
};


search_Z();
//search_Z("ZzZma pzhrZZZasze sz39Zns cetzzte lezzzztZtrZzZe DFRzZ");
//search_Z("ma phrase sans lettre ")










