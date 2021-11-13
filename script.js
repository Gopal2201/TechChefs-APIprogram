const URL1 = "https://reqres.in/api/users/1";
const URL2 = "https://reqres.in/api/users/3";
const URL3 = "https://reqres.in/api/users/10";

//function to fetch the data
async function getData(URL) {
    const response = await fetch(URL);
    //parse
    data = await response.json();  
    console.log(data);      
    return data;
}

async function getEmail() {
    try {
        let res = await getData(URL1);
        displayResult(res.data);
        res = await getData(URL2);
        displayResult(res.data);
        res = await getData(URL3);
        displayResult(res.data);
    } catch (err) {
        console.error(err);
    }
}

// To display the result in UI
function displayResult(res) {
    let emailData = document.getElementById("emaildata");
    let mailID = document.createElement("div");
    mailID.innerHTML = "Email: " + res.email;

    emailData.appendChild(mailID);
}

getEmail();