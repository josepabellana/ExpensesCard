


var chart = document.getElementById('chart');

(async ()=>{
    const data = await fetch('./data.json').then(res => res.json());
    for(let i = 0;i<data.length;i++){
        let text = document.createElement('p');
        let div = document.createElement('div');
        div.classList.add('column')
        div.style.height = `${data[i]['amount']}px`;
        
        text.textContent = `${data[i].day}`;
        chart.append(div)
        chart.append(text)
    }
})()