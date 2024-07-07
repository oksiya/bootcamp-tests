function totalPhoneBill(str){
    const arr = str.split(',');
    let call = 0;
    let sms = 0;
    for(let i=0;i<arr.length; i++){
      let log = arr[i].trim();
      switch(log){
        case 'call':
          call++;
        break;
        case 'sms':
          sms++;
        break;     
      }
    }
    return `R${((call*2.75)+(sms*0.65)).toFixed(2)}`;
  }