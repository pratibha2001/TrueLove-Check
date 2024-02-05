const questions=[{
    que:'What is the most important thing in your life?',
    a:'Money',
    b:'Studies',
    c:'Netflix',
    d:'Love',
    correct:"d"
},
{
    que:'When is Rose Day?',
    a:'7 Feb',
    b:'8 March',
    c:'9 April',
    d:'10 May',
    correct:"a"
},
{
    que:'Why did a girlfriend gift her boyfriend, a perfume?',
    a:'He had a bad body odour',
    b:'He lived in a hostel',
    c:'He was poor',
    d:'No, I gifted him nothing',
    correct:"d"
},
{
    que:'Where can you find the maximum couples?',
    a:'Classroom',
    b:'Rose Garden',
    c:'Library',
    d:'Momos stall',
    correct:"c"
}

]


let index=0;
let total=questions.length;
console.log(total)
let right=0,wrong=0,data;
const quesBox=document.getElementById("queBox"); /// QUESTION HEAD
const optionInputs= document.querySelectorAll('.options') // OPTIONS


const loadQuestion = () => {
    if(index==total){
        console.log("time to end the quiz")
        return endQuiz();
    }
    
    console.log(index)
    reset();
    data=questions[index];
    // console.log(data);
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;

}



const submitQuiz = () =>{
    // const data= questions[index];
    let ans= getAnswer();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let ans;
    optionInputs.forEach((input)=>{
            if(input.checked){
                ans= input.value ;
            }
    
    })
    return ans;
}

const reset =()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
})
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`<div style="text-align:center">
    <h3>Thank you for playing the quiz</h3>
    <h2> ${right} / ${total}  are correct</h2>
    </div>
    `
}

const prev=()=>{
    index=index-1;
    loadQuestion();
}

const next=()=>{
    index=index+1;
    loadQuestion();
}

// initial call
loadQuestion();