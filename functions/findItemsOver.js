function findItemsOver(list, threshold){
    let objectList = [];
    let name = '';
    let qty = 0;
    for(let i=0;i<list.length;i++){
      if(list[i].qty > threshold){
        let object = {name: list[i].name,
                  qty: list[i].qty}
        objectList.push(object);
      }
      
    }
    return objectList;
  }