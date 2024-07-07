function mostProfitableDepartment(salesList){
    let arrObj = [];
    let obj = {};
    for(let i=0;i<salesList.length;i++){
      let dep = salesList[i];
      if(obj[dep.department] === undefined){
         obj[dep.department] = 0;
      }
      obj[dep.department] += dep.sales;
      arrObj.push(obj)
      console.log(i+' = '+dep.department+', '+dep.sales);
  
    }
    let maxNum = -Infinity;
    let temp;
    for(let i in obj){
      if(obj[i] > maxNum){
        maxNum = obj[i];
        temp = i;
        console.log('ANSWER:  '+temp);
      }
    }  
    console.log(obj);
    return temp;
  }
  