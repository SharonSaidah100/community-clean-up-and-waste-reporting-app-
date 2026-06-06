const reportForm = document.getElementById("reportForm");
const reportList = document.getElementById("reportList");

let reports = [];

reportForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    const report = {
        name,
        location,
        description
    };

    reports.push(report);

    displayReports();

    reportForm.reset();
});

function displayReports() {
    reportList.innerHTML = "";

    reports.forEach(function(report) {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${report.name}</strong><br>
            Location: ${report.location}<br>
            Description: ${report.description}
        `;

        reportList.appendChild(li);
    });
}
