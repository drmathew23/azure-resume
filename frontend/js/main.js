window.addEventListener('DOMContentLoaded', (event) =>{
    GetVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(respnse => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").InnerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}