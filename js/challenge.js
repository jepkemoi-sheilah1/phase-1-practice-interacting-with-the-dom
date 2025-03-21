
addEventListener('DOMContentLoaded', function() {
    let counter = this.document.getElementById('counter');
    let count = 0;
    let timer = startTimer();//start timer
    let paused = false;
    //function to start timer
    function startTimer(){
        return setInterval(function(){
            if(!paused){
                count++;
                counter.innerText = count;
            }
        }, 1000);
    }       
    //function to pause timer /pause button
    this.document.getElementById('pause').addEventListener('click', function(){
        paused = !paused;
        this.innerText = paused ? 'resume' : 'pause';
    });
    //function to increment counter
    this.document.getElementById('plus').addEventListener('click', function(){
        count++;
        counter.innerText = count;
    });
    //function to decrement counter
    this.document.getElementById('minus').addEventListener('click', function(){
        count--;
        counter.innerText = count;
    });
    //function to like counter
    let likes = {};//object to store likes
    this.document.getElementById("heart").addEventListener('click', function(){
        if(likes[count] === undefined){
            likes[count] = 1;
        }else{
            likes[count]++;
        }
        let li = this.document.createElement('li');
        li.innerText = `${count} has been liked ${likes[count]} times`;
        newLike.innerText=`${count}has been liked & {likes[count]} time`;likeList.appendChild(newLike);
    
    });

    //add comment functionality
    document .getElementById('comment-form').addEventListener('submit', function(event){
        event.preventDefault();
         let comment = this.document.getElementById('comment-input').value;
         let p = this.document.createElement('p');
         p.innerText = comment;
         commentList.appendChild(newComment);
        document.getElementById("comment-form").reset();
        
    });
});
