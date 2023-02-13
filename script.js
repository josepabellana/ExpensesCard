


var chart = document.getElementById('chart');

(async ()=>{
    const data = await fetch('./data.json').then(res => res.json());
    for(let i = 0;i<data.length;i++){
        let div = document.createElement('div');
        div.classList.add('column')
        div.style.height = `${data[i]['amount']*2}px`;
        chart.append(div);
    }
    for(let i = 0;i<data.length;i++){
        let text = document.createElement('p');
        text.classList.add('textColumn')
        text.textContent = `${data[i].day}`;
        chart.append(text);
    }
})()