var form = document.getElementById("form");
var resumeDisplay1 = document.getElementById("generate-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var mschool = document.getElementById("mschool").value;
    var mgrade = document.getElementById("mgrade").value;
    var mgroup = document.getElementById("mgroup").value;
    var ischool = document.getElementById("ischool").value;
    var igrade = document.getElementById("igrade").value;
    var igroup = document.getElementById("igroup").value;
    var uniName = document.getElementById("uni-name").value;
    var uniProg = document.getElementById("uni-program").value;
    var uniCgpa = document.getElementById("uni-cgpa").value;
    var expCompany = document.getElementById("exp-company").value;
    var expTime = document.getElementById("exp-time").value;
    var expDesignation = document.getElementById("exp-designation").value;
    var skills = document.getElementById("skills").value;
    var outpuHtml = "\n    <h1><b>Resume</b></h1>\n    <h2>Personal Information</h2>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <p><b>Address:</b> ").concat(address, "</p>\n    <br>\n    <h2>Academic Information</h2>\n    <h3>Matriculation</h3>\n    <p><b>School:</b> ").concat(mschool, "</p>\n    <p><b>Grade:</b> ").concat(mgrade, "</p>\n    <p><b>Group:</b> ").concat(mgroup, "</p>\n    <h3>Intermediate</h3>\n    <p><b>School:</b> ").concat(ischool, "</p>\n    <p><b>Grade:</b> ").concat(igrade, "</p>\n    <p><b>Group:</b> ").concat(igroup, "</p>\n    <h3>University</h3>\n    <p><b>University name:</b> ").concat(uniName, "</p>\n    <p><b>Program:</b> ").concat(uniProg, "</p>\n    <p><b>CGPA:</b> ").concat(uniCgpa, "</p>\n    <br>\n    <h2>Work Experience</h2>\n    <p><b>Company:</b> ").concat(expCompany, "</p>\n    <p><b>Experience duration:</b> ").concat(expTime, " years</p>\n    <p><b>Designation:</b> ").concat(expDesignation, "</p>\n    <br>\n    <h2>Skills</h2>\n    <p><b>Skills:</b> ").concat(skills, "</p>\n    ");
    if (resumeDisplay1) {
        resumeDisplay1.innerHTML = outpuHtml;
    }
    else {
        console.error("Please fill the missing fields");
    }
});
