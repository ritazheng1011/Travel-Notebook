// We can worry about the JS towards the end
const compiledData = [];

const addingData = () =>
{
    const inputs = document.querySelectorAll(".data-input");
    const title = document.querySelector(".title-input");
    const newListInput = [];
    
    newListInput.push(...Array.from(inputs).map(input => input.value));
    console.log(newListInput); // taking input for current page and making array

    compiledData.push(newListInput); // pushes new array into list of data

    console.log(compiledData);
    savingData(compiledData, title);

    // clear the textbox
    inputs.value = "";
    console.log("ADDED");
}

//actually writing data to memory
const savingData = (data, title) => {
    var data = JSON.stringify(data); //converts data to a String
    localStorage.setItem(title, data); //saves data in localStorage
};

const retrievingData = (data) => {
    var retrievedData = localStorage.getItem(data); //gets data from localStorage
    var dataList = JSON.parse(retrievedData); //converts back to JS value

    console.log(dataList.items[0].Desc);
};

const createLog = (data) =>{
    
}
document.querySelector(".save-entry").addEventListener("click", addingData);
