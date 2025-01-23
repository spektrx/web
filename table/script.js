const data = [
    {
        fullName: "John Doe",
        companyName: "Company A",
        id: 14,
        teamName: "Team Alpha",
        date: "Jan 11, 2050",
        details: {
            dateJoined: "1/11/2050",
            jobTitle: "Web Developer",
            level: "2",
            address: "123 Sample St, Sydney",
            phone: "+1 (555) 000-0000",
            email: "hello@relume.io",
            skills: "Webflow, Figma",
            languages: "English",
            experience: "5+ years",
            imageUrl: "placeholder.png" 
        }
    },
    {
        fullName: "Jane Doe",
        companyName: "Company B",
        id: 15,
        teamName: "Team Beta",
        date: "Feb 15, 2051",
        details: {
            dateJoined: "2/15/2051",
            jobTitle: "Designer",
            level: "3",
            address: "456 Another St, Sydney",
            phone: "+1 (555) 111-1111",
            email: "jane@relume.io",
            skills: "Photoshop, Illustrator",
            languages: "English, French",
            experience: "4+ years",
            imageUrl: "placeholder.png" 
        }
    }
];

function generateTable(data) {
    const tableBody = document.getElementById("table-body");

    data.forEach(row => {
        // Основная строка
        const mainRow = document.createElement("tr");
        mainRow.classList.add("table-main");
        mainRow.innerHTML = `
            <td class="table-main__text table-main__big-text"><img src="img/Chevron Up.svg" alt="" class="table-main__text-img"> ${row.fullName}</td>
            <td class="table-main__text">${row.companyName}</td>
            <td class="table-main__text">${row.id}</td>
            <td class="table-main__text">${row.teamName}</td>
            <td class="table-main__text">${row.date}</td>
        `;
        tableBody.appendChild(mainRow);

        // Скрытая строка
        const hiddenRow = document.createElement("tr");
        hiddenRow.classList.add("hidden-content");
        hiddenRow.style.display = "none";

        hiddenRow.innerHTML = `
            <td colspan="5">
                <div class="details-grid">
                    <div class="grid-item date-joined"><strong>Date joined:</strong> <br> ${row.details.dateJoined}</div>
                    <div class="grid-item job-title"><strong>Job title:</strong><br> ${row.details.jobTitle}</div>
                    <div class="grid-item level"><strong>Level:</strong><br> ${row.details.level}</div>
                    <div class="grid-item address"><strong>Address:</strong><br> ${row.details.address}</div>
                    <div class="grid-item phone"><strong>Phone:</strong><br> ${row.details.phone}</div>
                    <div class="grid-item email"><strong>Email:</strong><br> ${row.details.email}</div>
                    <div class="grid-item skills"><strong>Skills:</strong> <br>${row.details.skills}</div>
                    <div class="grid-item languages"><strong>Languages:</strong> <br>${row.details.languages}</div>
                    <div class="grid-item experience"><strong>Experience:</strong> <br>${row.details.experience}</div>
                    <div class="grid-item image-container">
                        <img src="${row.details.imageUrl}" alt="Profile Image" class="profile-image">
                    </div>
                </div>
            </td>
        `;
        tableBody.appendChild(hiddenRow);

        // Обработчик клика
        mainRow.addEventListener("click", () => {
            const isHidden = hiddenRow.style.display === "none";
            hiddenRow.style.display = isHidden ? "table-row" : "none";
        });
    });
}

generateTable(data);
