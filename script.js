


const memo=document.getElementById('memo');
const button=document.getElementById('submit');

const hukkatu = JSON.parse(localStorage.getItem('memos')) || [];

const savememos = [];

for(let i=0;i<hukkatu.length;i++){
    const element = document.getElementById('memos');
    element.insertAdjacentHTML('afterend', hukkatu[i]);
    savememos.push(hukkatu[i]);
}

button.addEventListener('click', ()=>{
    const element = document.getElementById('memos');
    const now = new Date();
    const newmemo=memo.value;
    if(newmemo!==''&&newmemo!=='メモをすべて削除'){
        element.insertAdjacentHTML('afterend', '<p>・'+newmemo+'('+now.toLocaleTimeString("en-US")+')</p>');
        memo.value = '';
        const save = '<p>・'+newmemo+'('+now.toLocaleTimeString("en-US")+')</p>';
        savememos.push(save);
        localStorage.setItem('memos', JSON.stringify(savememos));
    }else if(newmemo==='メモをすべて削除'){
        localStorage.clear();
        window.location.reload();
    }
});