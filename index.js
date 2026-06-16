const num = (val) =>{
        let data = document.getElementById('data');
        data.value += val ;
}

const ac = () =>{
        let data = document.getElementById('data');
        data.value = "" ;
}

const ans = () =>{
        let data = document.getElementById('data');
        data.value = eval(data.value);
}

const length = (data) =>{
        let counter = 0;
        for (ele in data){
                counter++;
        }
        return counter;
} 

const lclr = () =>{
      let data = document.getElementById('data');
      let info = '';
      for (let i = 0 ; i <(length(data.value)-1) ; i++ )  {
        info += data.value[i];
      }
      data.value = info ;
}