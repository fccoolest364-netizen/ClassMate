let assignments =
  JSON.parse(localStorage.getItem("classmateAssignments")) || [];

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
    completed: false,
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
  localStorage.setItem("classmateAssignments", JSON.stringify(assignments));
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

  assignments.forEach(function (assignment) {
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
  const assignment = assignments.find(function (item) {
    return item.id === id;
  });

  if (assignment) {
    assignment.completed = !assignment.completed;
  }

  saveAssignments();
  displayAssignments();
}

function deleteAssignment(id) {
  assignments = assignments.filter(function (item) {
    return item.id !== id;
  });

  saveAssignments();
  displayAssignments();
}

displayAssignments();
let studySessions =
  JSON.parse(localStorage.getItem("classmateStudySessions")) || [];

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
    endTime: endTime,
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
  localStorage.setItem("classmateStudySessions", JSON.stringify(studySessions));
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

  studySessions.forEach(function (session) {
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
  studySessions = studySessions.filter(function (session) {
    return session.id !== id;
  });

  saveStudySessions();
  displayStudySessions();
}

displayStudySessions();

let timetable = JSON.parse(localStorage.getItem("classmateTimetable")) || [];

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

  if (subject === "" || day === "" || start === "" || end === "") {
    alert("Please fill in all the fields.");
    return;
  }

  const newClass = {
    id: Date.now(),
    subject: subject,
    day: day,
    start: start,
    end: end,
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
  localStorage.setItem("classmateTimetable", JSON.stringify(timetable));
}

function displayTimetable() {
  const timetableList = document.getElementById("timetableList");

  timetableList.innerHTML = "";

  if (timetable.length === 0) {
    timetableList.innerHTML = `
            <p class="empty-message">
                No classes added yet.
            </p>
        `;

    return;
  }

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  days.forEach(function (day) {
    const dayClasses = timetable.filter(function (classItem) {
      return classItem.day === day;
    });

    if (dayClasses.length === 0) {
      return;
    }

    const daySection = document.createElement("div");

    daySection.className = "timetable-day";

    daySection.innerHTML = `
            <h3>${day}</h3>
        `;

    dayClasses.forEach(function (classItem) {
      const classElement = document.createElement("div");

      classElement.className = "timetable-class";

      classElement.innerHTML = `
                <div>
                    <strong>${classItem.subject}</strong>

                    <p>
                        ${classItem.start} - ${classItem.end}
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

      daySection.appendChild(classElement);
    });

    timetableList.appendChild(daySection);
  });
}

function deleteClass(id) {
  timetable = timetable.filter(function (classItem) {
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
function displayToday() {
  const todayContent = document.getElementById("todayContent");

  if (!todayContent) {
    return;
  }

  const today = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayName = days[today.getDay()];
  const todayDate = today.toISOString().split("T")[0];

  const todayClasses = timetable.filter(function (classItem) {
    return classItem.day === todayName;
  });

  const todaySessions = studySessions.filter(function (session) {
    return session.date === todayDate;
  });

  const upcomingAssignments = assignments.filter(function (assignment) {
    return !assignment.completed && assignment.dueDate >= todayDate;
  });

  let content = "";

  if (todayClasses.length > 0) {
    content += `<h3>📅 Classes</h3>`;

    todayClasses.forEach(function (classItem) {
      content += `
                <p>
                    <strong>${classItem.subject}</strong>
                    — ${classItem.start} - ${classItem.end}
                </p>
            `;
    });
  }

  if (todaySessions.length > 0) {
    content += `<h3>📚 Study Sessions</h3>`;

    todaySessions.forEach(function (session) {
      content += `
                <p>
                    <strong>${session.subject}</strong>
                    — ${session.startTime} - ${session.endTime}
                </p>
            `;
    });
  }

  if (upcomingAssignments.length > 0) {
    content += `<h3>📝 Upcoming Assignments</h3>`;

    upcomingAssignments.forEach(function (assignment) {
      content += `
                <p>
                    <strong>${assignment.name}</strong>
                    — Due ${assignment.dueDate}
                </p>
            `;
    });
  }

  if (content === "") {
    content = `
            <p class="empty-message">
                Nothing scheduled for today. 🎉
            </p>
        `;
  }

  todayContent.innerHTML = content;
}

displayToday();
