const userNameTextField = document.getElementById("username");
const addTaskBtn = document.getElementById("addTask")
const recorddata = document.getElementById("records");

let userArray = [];  // data store in object format

let edit_id = null;

// step 1
addTaskBtn.onclick = () => {
    const name = userNameTextField.value;
    // alert(name);
    if(edit_id != null){
      userArray.splice(edit_id, 1, {
        username: name
      });  
      edit_id = null;
    }
    else{
      userArray.push({
        username: name  // property name and value is also name
    });
    // console.log(userArray);
    }

   

    SaveData(userArray);  // call function
    userNameTextField.value = "";
};

// step 2
function SaveData(userArray) {
    // console.log(userArray)

    let strdata = JSON.stringify(userArray);
    // console.log(strdata)

    localStorage.setItem("username", strdata);
    displayData();
}

// step 3
let getdata = localStorage.getItem("username");
// console.log(getdata)

if (getdata != null) {
    userArray = JSON.parse(getdata);  // object format
}
// console.log(userArray)  // array format

function displayData() {
    let data1 = "";
    userArray.forEach((item, index) => {
        // console.log(item)
        data1 += `<tr>
        <td>${index + 1} </td>
        <td>${item.username} </td>
        <td>
           
            <a href="#" onclick='DeleteInfo(${index})'>Delete</a>
        </td>
        </tr>`;
        console.log(data1);
    });

    recorddata.innerHTML = data1;
}
displayData();


function DeleteInfo(id) {
    // alert(id)
    userArray.splice(id, 1);
    SaveData(userArray);
}
