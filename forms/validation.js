function validate()
{
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var subject=document.getElementById('subject');
    var textarea=document.getElementById('textarea');

    if(name.value.trim()=="")
    {
        // alert("Please Enter Name");
        document.getElementById('spanname').innerHTML="Please enter name";
        spanname.style.color="red"
        name.style.border="1px solid red";
        return false;
    }
    else if(email.value.trim()=="")
    {
        // alert("Please enter email");
        document.getElementById('spanemail').innerHTML="please enter email"
        spanemail.style.color="red"
        name.style.border="1px solid red";
        return false;

    }
    else if(subject.value.trim()=="")
    {
        // alert("Please Enter Subject");
        document.getElementById('spansubject').innerHTML="Please enter subject"
        spansubject.style.color="red"
        subject.style.border="1px solid red";
        return false;
    }
    else if(textarea.value.trim().length<50)
    {
        document.getElementById('spantextarea').innerHTML="minimum 50 letter!"
        textarea.style.border="1px solid red"
        spantextarea.style.color="red"
        return false;
    }
    else{
         true;
    }
   
}