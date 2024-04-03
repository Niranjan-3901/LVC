

function validateForm(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    let gender;
    document.getElementsByName("gender").forEach(e=>{
        // console.log(e.checked)
        if (e.checked){
            gender= e.value;
        }
    });

    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    let skills=[]
    document.getElementsByName("skills").forEach(e=>{
        if (e.checked){
        skills.push(e.value);}
    });

    alert("Name: "+name+"\nEmail: "+email+"\nGender: "+gender+"\nDOB: "+dob+"\nCourse: "+course+"\nSkills: "+skills)
}

function result(){
    math=parseInt(document.getElementById('math').value);
    english=parseInt(document.getElementById('english').value);
    science=parseInt(document.getElementById('science').value);
    
    var total=math+english+science;
    var percentage=((total/3)).toFixed(2)+"%";
    document.getElementById("result").innerHTML="<h4>Result: </h4>Total Mark: "+total+" <br/> Percentage: "+percentage; 
}

function show(){
    let n=document.getElementById("name").value;
    let s=parseInt(document.getElementById("salary").value);
    let performance=document.getElementById("performance").value;
    perfor={'A':30,'B':10,'C':0}
    if (n!='' && s!=''){
        if (performance!='none'){
        let bonus=parseFloat(((perfor[performance]/100)*s).toFixed(2))
        document.getElementById("bonus").innerHTML='<b>Bonus: </b>'+bonus
        document.getElementById("total").innerHTML='<b>Total: </b> $'+ (s+bonus)
        }
        else{
            document.getElementById("bonus").innerHTML=''
            document.getElementById("total").innerHTML=''
        }
    }else{
        alert("Please Enter detail's")
        document.forms["salaryForm"].reset();
        document.getElementById("bonus").innerHTML=''
        document.getElementById("total").innerHTML=''
    }
}

function showTestResult(){
    questions=['1','2','3']
    let total_mark=0
    questions.forEach(q=>{
        document.getElementsByName(q).forEach(e=> {
            if (e.checked){ 
                if(e.value=="true"){
                    total_mark=total_mark+2
                }
            }
        })
    })
    alert("You get "+total_mark+" out of "+questions.length*2+" marks.")
    document.forms['form_question'].reset();
}

function instruction(){
    window.open(
        'instructions.html',
        'popupWindow',
        "width=800,height=400,left=" + ((screen.width / 2) - 400) + ",top=" + ((screen.height / 2) - 200)
      );
      
}
