


var chart = document.getElementById('chart');

(async ()=>{
    const data = await fetch('./data.json').then(res => res.json());
    for(let i = 0;i<data.length;i++){
        let div = document.createElement('div');
        div.classList.add('column')
        div.style.height = `${data[i]['amount']*2}px`;
        let area = document.createElement('div');
        area.classList.add('columnData');
        let text = document.createElement('p');
        text.textContent = `$${data[i]['amount']}`;
        area.append(text);
        div.append(area);
        let now = new Date();
        now = now.toString().substring(0,3).toLowerCase();
        if(data[i]['day'] === now){
            div.classList.add('todayCol')
        }
        await delay(300);
        chart.append(div);
    }
    for(let i = 0;i<data.length;i++){
        let text = document.createElement('p');
        text.style.color = 'var(--Medium-brown)';
        text.style.textAlign = 'center';
        text.textContent = `${data[i].day}`;
        chart.append(text);
    }
})()


async function delay(time){
    return new Promise((res) => setInterval(res,time))
}