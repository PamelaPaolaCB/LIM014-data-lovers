  const filtrara={ 
  filterData : function(data, tipo){
    let imagen =[];
    let nombre =[];
    let about = [];
    let number = [];
    data.pokemon.forEach(function(task){
    if(task.type == tipo){
        imagen.push(task.img)
        nombre.push(task.name)
        about.push(task.about)
        number.push(task.num)
        }
    });
    let bebe = [imagen,nombre,about,number]
    return bebe
  },

  sortdata : function(data){
    let imagen =[];
    let nombre =[];
    let about = [];
    let number = [];
    data.pokemon.forEach(function(task){
    if(task.type){
        imagen.push(task.img)
        nombre.push(task.name)
        about.push(task.about)
        number.push(task.num)
        }
    });
    let bebe = [imagen,nombre,about,number]
    console.log(bebe)
    return bebe
  },

  sorted : function(data, TypeOrder){
    let filtroOrden = "";
    if(TypeOrder == "Ascendente"){
      filtroOrden = data.pokemon.sort((a, b) => {
        return a.name.localeCompare(b.name);
    })}
    else if(TypeOrder =="Descendente"){
      filtroOrden = data.pokemon.sort((a, b) => {
        return b.name.localeCompare(a.name);
    })}
    else if(TypeOrder=="Debilidad"){
      filtroOrden = data.pokemon.sort((a, b) => {
        return b.weaknesses.lenght.localeCompare(a.weaknesses.lenght)
    })}
    else if(TypeOrder=="Fortaleza"){
      filtroOrden = data.pokemon.sort((a, b) => {
      return b.resistant.lenght.localeCompare(a.name.resistant.lenght)
    })};
    return  filtroOrden}
}
  
export default filtrara
