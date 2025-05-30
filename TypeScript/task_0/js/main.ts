interface Student {
    firtName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firtName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firtName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = document.createElement("thead");
const tbody: HTMLTableSectionElement = document.createElement("tbody");
const headerRow: HTMLTableRowElement = document.createElement("tr");
const nameHeader: HTMLTableCellElement = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
thead.appendChild(headerRow);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firtName;
    const locationCell: HTMLTableCellElement = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
}
);