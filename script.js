let assignments = JSON.parse(localStorage.getItem("classmateAssignments")) || [];

function openAssignmentForm() {
    document.getElementById("assignmentForm").style.display = "block";
}

function closeAssignmentForm() {
    document.getElementById("assignmentForm").style.display = "none";
}

function addAssignment() {

    const name = document.getElementById("assignmentName").value;
    const subject = document.getElementById("assignmentSubject").value;
    const dueDate = document.getElementById("dueDate").value;

    if (name === "" || subject === "" || dueDate === "") {
        alert("Please fill in all the fields.");
        return;
    }

    const newAssignment = {
        id: Date.now(),
        name: name,
        subject: subject,
        dueDate: dueDate,
        completed: false
    };

    assignments.push(newAssignment);

    saveAssignments();
    displayAssignments();

    document.getElementById("assignmentName").value = "";
    document.getElementById("assignmentSubject").value = "";
    document.getElementById("dueDate").value = "";

    closeAssignmentForm();
}

function saveAssignments() {
    localStorage.setItem(
        "classmateAssignments",
        JSON.stringify(assignments)
    );
}

function displayAssignments() {

    const assignmentList = document.getElementById("assignmentList");

    assignmentList.innerHTML = "";

    if (assignments.length === 0) {
        assignmentList.innerHTML = `
            <p class="empty-message">
                No assignments yet.
            </p>
        `;
        return;
    }

    assignments.forEach(function(assignment) {

        const assignmentElement = document.createElement("div");

        assignmentElement.className = "assignment";

        if (assignment.completed) {
            assignmentElement.classList.add("completed");
        }

        assignmentElement.innerHTML = `
            <div>
                <h3>${assignment.name}</h3>
                <p>Subject: ${assignment.subject}</p>
                <p>Due: ${assignment.dueDate}</p>
            </div>

            <div class="assignment-buttons">

                <button onclick="completeAssignment(${assignment.id})">
                    ${assignment.completed ? "Completed ✓" : "Complete"}
                </button>

                <button onclick="deleteAssignment(${assignment.id})">
                    Delete
                </button>

            </div>
        `;

        assignmentList.appendChild(assignmentElement);
    });
}

function completeAssignment(id) {

    const assignment = assignments.find(function(item) {
        return item.id === id;
    });

    if (assignment) {
        assignment.completed = !assignment.completed;
    }

    saveAssignments();
    displayAssignments();
}

function deleteAssignment(id) {

    assignments = assignments.filter(function(item) {
        return item.id !== id;
    });

    saveAssignments();
    displayAssignments();
}

displayAssignments();
let studySessions = JSON.parse(
    localStorage.getItem("classmateStudySessions")
) || [];

function openStudyForm() {
    document.getElementById("studyForm").style.display = "block";
}

function closeStudyForm() {
    document.getElementById("studyForm").style.display = "none";
}

function addStudySession() {

    const subject = document.getElementById("studySubject").value;
    const topic = document.getElementById("studyTopic").value;
    const date = document.getElementById("studyDate").value;
    const startTime = document.getElementById("startTime").value;
    const endTime = document.getElementById("endTime").value;

    if (
        subject === "" ||
        topic === "" ||
        date === "" ||
        startTime === "" ||
        endTime === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    const newSession = {
        id: Date.now(),
        subject: subject,
        topic: topic,
        date: date,
        startTime: startTime,
        endTime: endTime
    };

    studySessions.push(newSession);

    saveStudySessions();
    displayStudySessions();

    document.getElementById("studySubject").value = "";
    document.getElementById("studyTopic").value = "";
    document.getElementById("studyDate").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";

    closeStudyForm();
}

function saveStudySessions() {

    localStorage.setItem(
        "classmateStudySessions",
        JSON.stringify(studySessions)
    );
}

function displayStudySessions() {

    const studyList = document.getElementById("studyList");

    studyList.innerHTML = "";

    if (studySessions.length === 0) {

        studyList.innerHTML = `
            <p class="empty-message">
                No study sessions yet.
            </p>
        `;

        return;
    }

    studySessions.forEach(function(session) {

        const sessionElement = document.createElement("div");

        sessionElement.className = "assignment";

        sessionElement.innerHTML = `
            <div>
                <h3>${session.subject}</h3>

                <p>
                    Topic: ${session.topic}
                </p>

                <p>
                    Date: ${session.date}
                </p>

                <p>
                    Time: ${session.startTime} - ${session.endTime}
                </p>
            </div>

            <div class="assignment-buttons">

                <button onclick="deleteStudySession(${session.id})">
                    Delete
                </button>

            </div>
        `;

        studyList.appendChild(sessionElement);
    });
}

function deleteStudySession(id) {

    studySessions = studySessions.filter(function(session) {
        return session.id !== id;
    });

    saveStudySessions();
    displayStudySessions();
}

displayStudySessions();

let timetable = JSON.parse(
    localStorage.getItem("classmateTimetable")
) || [];

function openTimetableForm() {
    document.getElementById("timetableForm").style.display = "block";
}

function closeTimetableForm() {
    document.getElementById("timetableForm").style.display = "none";
}

function addClass() {

    const subject = document.getElementById("classSubject").value;
    const day = document.getElementById("classDay").value;
    const start = document.getElementById("classStart").value;
    const end = document.getElementById("classEnd").value;

    if (
        subject === "" ||
        day === "" ||
        start === "" ||
        end === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    const newClass = {
        id: Date.now(),
        subject: subject,
        day: day,
        start: start,
        end: end
    };

    timetable.push(newClass);

    saveTimetable();
    displayTimetable();

    document.getElementById("classSubject").value = "";
    document.getElementById("classDay").value = "";
    document.getElementById("classStart").value = "";
    document.getElementById("classEnd").value = "";

    closeTimetableForm();
}

function saveTimetable() {

    localStorage.setItem(
        "classmateTimetable",
        JSON.stringify(timetable)
    );
}

function displayTimetable() {

    const timetableList =
        document.getElementById("timetableList");

    timetableList.innerHTML = "";

    if (timetable.length === 0) {

        timetableList.innerHTML = `
            <p class="empty-message">
                No classes added yet.
            </p>
        `;

        return;
    }

    timetable.forEach(function(classItem) {

        const classElement =
            document.createElement("div");

        classElement.className = "assignment";

        classElement.innerHTML = `
            <div>

                <h3>${classItem.subject}</h3>

                <p>
                    Day: ${classItem.day}
                </p>

                <p>
                    Time: ${classItem.start} - ${classItem.end}
                </p>

            </div>

            <div class="assignment-buttons">

                <button
                    onclick="deleteClass(${classItem.id})"
                >
                    Delete
                </button>

            </div>
        `;

        timetableList.appendChild(classElement);
    });
}

function deleteClass(id) {

    timetable = timetable.filter(function(classItem) {
        return classItem.id !== id;
    });

    saveTimetable();
    displayTimetable();
}

displayTimetable();

function openTimetableForm() {
    document.getElementById("timetableForm").style.display = "block";
}

function closeTimetableForm() {
    document.getElementById("timetableForm").style.display = "none";
}