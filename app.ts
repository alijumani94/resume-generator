const form= document.getElementById(`form`) as HTMLFormElement;
const resumeDisplay1= document.getElementById(`generate-resume`) as HTMLDivElement;

form.addEventListener(`submit`, (event: Event)=>{
    event.preventDefault();

    const name= (document.getElementById(`name`) as HTMLInputElement).value;
    const email= (document.getElementById(`email`) as HTMLInputElement).value;
    const phone= (document.getElementById(`phone`) as HTMLInputElement).value;
    const address= (document.getElementById(`address`) as HTMLInputElement).value;
    const mschool= (document.getElementById(`mschool`) as HTMLInputElement).value;
    const mgrade= (document.getElementById(`mgrade`) as HTMLInputElement).value;
    const mgroup= (document.getElementById(`mgroup`) as HTMLInputElement).value;
    const ischool= (document.getElementById(`ischool`) as HTMLInputElement).value;
    const igrade= (document.getElementById(`igrade`) as HTMLInputElement).value;
    const igroup= (document.getElementById(`igroup`) as HTMLInputElement).value;
    const uniName= (document.getElementById(`uni-name`) as HTMLInputElement).value;
    const uniProg= (document.getElementById(`uni-program`) as HTMLInputElement).value;
    const uniCgpa= (document.getElementById(`uni-cgpa`) as HTMLInputElement).value;
    const expCompany= (document.getElementById(`exp-company`) as HTMLInputElement).value;
    const expTime= (document.getElementById(`exp-time`) as HTMLInputElement).value;
    const expDesignation= (document.getElementById(`exp-designation`) as HTMLInputElement).value;
    const skills= (document.getElementById(`skills`) as HTMLInputElement).value;

    const outpuHtml= `
    <h1><b>Resume</b></h1>
    <h2>Personal Information</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Phone:</b> ${phone}</p>
    <p><b>Address:</b> ${address}</p>
    <br>
    <h2>Academic Information</h2>
    <h3>Matriculation</h3>
    <p><b>School:</b> ${mschool}</p>
    <p><b>Grade:</b> ${mgrade}</p>
    <p><b>Group:</b> ${mgroup}</p>
    <h3>Intermediate</h3>
    <p><b>School:</b> ${ischool}</p>
    <p><b>Grade:</b> ${igrade}</p>
    <p><b>Group:</b> ${igroup}</p>
    <h3>University</h3>
    <p><b>University name:</b> ${uniName}</p>
    <p><b>Program:</b> ${uniProg}</p>
    <p><b>CGPA:</b> ${uniCgpa}</p>
    <br>
    <h2>Work Experience</h2>
    <p><b>Company:</b> ${expCompany}</p>
    <p><b>Experience duration:</b> ${expTime} years</p>
    <p><b>Designation:</b> ${expDesignation}</p>
    <br>
    <h2>Skills</h2>
    <p><b>Skills:</b> ${skills}</p>
    `;

    if(resumeDisplay1){
        resumeDisplay1.innerHTML= outpuHtml;
    }
    else{
        console.error(`Please fill the missing fields`)
    }
})