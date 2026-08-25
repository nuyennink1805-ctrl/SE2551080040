let img = document.querySelectorAll('.thumbail img');

for(let ig of img){
    ig.addEventListener('click', function(){
        let main = document.getElementById('main-pic');
        main.src = this.src;
    })
}
function addComment(){
    if(confirm("baan co chac nhap noi dung nay khong")===true){
        let content = document.getElementById('comment-content');
        let h = 
        `<li class="comment flex">
                <div class="col10">
                    <img src="./imgage/us.jpg" alt="">
                </div>
                <div class="col90">
                    <p>${content.value}</p>
                    <p>${moment(new Date().getTime()).locale('vi').fromNow()} </p>
                </div>
            </li>
        `;
        // let parent = document.querySelector('.comment-list');
        // parent.innerHTML = h + parent.innerHTML;
        let s = document.querySelector('.comment-list > li:first-child');
        s.insertAdjacentHTML('beforebegin', h);
    }
}