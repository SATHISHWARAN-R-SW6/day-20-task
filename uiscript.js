document.addEventListener("DOMContentLoaded", function () {
    fetchData()
        .then(displayData)
        .catch(handleError);
});

function fetchData() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function displayData(data) {
    const dataContainer = document.querySelector(".data-container");
    dataContainer.innerHTML = `<p>User ID: ${data.userId}</p>
                              <p>Title: ${data.title}</p>
                              <p>Completed: ${data.completed ? 'Yes' : 'No'}</p>`;
}

function handleError(error) {
    console.error("Error:", error.message);
    // Display a user-friendly error message on the webpage if needed
}
