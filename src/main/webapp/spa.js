
var userArray = [];

$.ajax({
    url: "rest/users",
    success: function(data){
        console.log(data)
        for (var i=0; i<data.length; i++){
            userArray.push(new User(data[i].id, data[i].username, data[i].initials, data[i].cpr, data[i].password, data[i].roles))
        }
        generateOversigt();
    },
    dataType: "json"
});

 userArray.push(new User("1","DrGoat", "DG", "794613-9487", "turnips666",["pharmacist","laborant"]))
 userArray.push(new User("2","Bames Jond", "BJ", "435223-2234", "antifrost","laborant"))
 userArray.push(new User("3","Peter Parker", "PP", "126748-1234", "permafrost","laborant"))
 userArray.push(new User("4","Someting awful", "SA", "336441-6644", "darknezzz","administrator"))
 userArray.push(new User("5","William", "W", "974465-2221", "finishvodka","produktionsleder"))
 userArray.push(new User("6","Gummiand", "GA", "844655-2176", "kappapride1234","laborant"))


function generateOversigt(){
    var oversigtString = "<tr id='headlineTable'><td>ID</td><td>Username</td><td>Initials</td><td>CPR</td><td>Password</td><td>Roller:</td></tr>";

    for (var j = 0; j < userArray.length; j++){
        oversigtString += "<tr onclick='selectBruger(" + j + ")'><td>" + userArray[j].userId + "</td>" + "<td>" + userArray[j].userName + "</td>" + "<td>" + userArray[j].ini + "</td>" + "<td>" + userArray[j].cpr+ "</td>" + "<td>" + userArray[j].password+ "</td>" + "<td>" + userArray[j].roles.join(", ")+ "</td></tr>" ;
    }
    document.getElementById("oversigtTable").innerHTML = oversigtString;
}

function User (userId, userName, ini, cpr, password, roles){
    this.userId = userId;
    this.userName = userName;
    this.ini = ini;
    this.cpr = cpr;
    this.password = password;
    this.roles = roles;
}

function selectBruger(input){
    document.getElementById("retCheckboxAdministrator").checked = false;
    document.getElementById("retCheckboxPharmacist").checked = false;
    document.getElementById("retCheckboxProduktionsleder").checked = false;
    document.getElementById("retCheckboxLaborant").checked = false;

    document.getElementById("retBrugerId").value = userArray[input].userId;
    document.getElementById("retBrugerUsername").value = userArray[input].userName;
    document.getElementById("retBrugerIni").value = userArray[input].ini;
    document.getElementById("retBrugerCpr").value = userArray[input].cpr;
    document.getElementById("retBrugerPassword").value = userArray[input].password;

    var selectedUserRoles = userArray[input].roles;

    if (selectedUserRoles.constructor === Array){
        var arrayLength = selectedUserRoles.length;

        for(var i = 0; i < arrayLength; i++){
            if (selectedUserRoles[i] == "administrator"){
                document.getElementById("retCheckboxAdministrator").checked = true;
            } else if (selectedUserRoles[i] == "pharmacist"){
                document.getElementById("retCheckboxPharmacist").checked = true;
            } else if (selectedUserRoles[i] == "produktionsleder"){
                document.getElementById("retCheckboxProduktionsleder").checked = true;
            } else if (selectedUserRoles[i] == "laborant"){
                document.getElementById("retCheckboxLaborant").checked = true;
            }
        }
    } else {
        if (selectedUserRoles == "administrator"){
            document.getElementById("retCheckboxAdministrator").checked = true;
        } else if (selectedUserRoles == "pharmacist"){
            document.getElementById("retCheckboxPharmacist").checked = true;
        } else if (selectedUserRoles == "produktionsleder"){
            document.getElementById("retCheckboxProduktionsleder").checked = true;
        } else if (selectedUserRoles == "laborant"){
            document.getElementById("retCheckboxLaborant").checked = true;
        }
    }



    document.getElementById("retCheckboxPharmacist").value = userArray[input].userId;
    document.getElementById("retCheckboxProduktionsleder").value = userArray[input].userId;
    document.getElementById("retCheckboxLaborant").value = userArray[input].userId;



}
function editUser(){
    var changedUserId = document.getElementById("retBrugerId").value;
    var changedUserName = document.getElementById("retBrugerUsername").value;
    var changedUserIni = document.getElementById("retBrugerIni").value;
    var changedUserCpr = document.getElementById("retBrugerCpr").value;
    var changedUserPassword = document.getElementById("retBrugerPassword").value;

    var changedUserRoles = [];

    if (document.getElementById("retCheckboxAdministrator").checked == true){
        changedUserRoles.push("administrator");
    }
    if (document.getElementById("retCheckboxPharmacist").checked == true){
        changedUserRoles.push("pharmacist");
    }
    if (document.getElementById("retCheckboxProduktionsleder").checked == true){
        changedUserRoles.push("produktionsleder");
    }
    if (document.getElementById("retCheckboxLaborant").checked == true){
        changedUserRoles.push("laborant");
    }
    var changedUser = new User(changedUserId, changedUserName, changedUserIni, changedUserCpr, changedUserPassword,changedUserRoles);
    userArray[changedUser.userId-1] = changedUser;
    generateOversigt();
}

var loginIndex;
function login(){
    var arrayLength = userArray.length;
    var passwordInput = document.getElementById("logonPassword").value;
    var usernameInput = document.getElementById("logonUsername").value;
    for (var i = 0; i < arrayLength; i++){
        if (usernameInput == userArray[i].userName){
            if (passwordInput == userArray[i].password){
                console.log("login succesful with: " + userArray[i].userName + " " + userArray[i].password);
                loginIndex = i;
                document.getElementById("logonWrapper").style.display = "none";
                break;
            }
        } else {
            console.log("login failed.");
        }
    }
}
function generateRoles(){
    var roleResult = [];
    if (document.getElementById("opretCheckboxAdministrator").checked == true){
        roleResult.push("Administrator");
    }
    if (document.getElementById("opretCheckboxPharmacist").checked == true){
        roleResult.push("Pharmacist");
    }
    if (document.getElementById("opretCheckboxProduktionsleder").checked == true){
        roleResult.push("Produktionsleder");
    }
    if (document.getElementById("opretCheckboxLaborant").checked == true){
        roleResult.push("Laborant");
    }
    return roleResult;
}
generateRoles();
function generateUser(){
    var generatedUsername = document.getElementById("opretBrugerUsername").value;
    var generatedIni = document.getElementById("opretBrugerIni").value;
    var generatedCpr = document.getElementById("opretBrugerCpr").value;
    var generatedPassword = document.getElementById("opretBrugerPassword").value;
    var generatedRoles = generateRoles();
    var generatedUser = new User("tbd", generatedUsername, generatedIni, generatedCpr, generatedPassword, generatedRoles);
    userArray.push(generatedUser);

    console.log("new user generated: " + generatedUser);
    console.log(userArray);
    generateOversigt();
}