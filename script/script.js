let value = [];
let alreadyAppended = [];
let alreadyTasksAppended = [];
let completedList = [];
let item = 1;
let tasksLists = [];
let count = 0;

document.getElementById("tasksList").addEventListener("click", function (e) {
  const id = e.target.id;
  const arrid = id.split("-");
  // convert to selectedIndex
  const index = arrid[1];
  const num = Number(index);
  //   console.log(num);

  if (e.target.classList.contains("button1")) {
    //   console.log(e.target.id +"helo");
    add(e.target.id);
  }

  if (e.target.classList.contains("in")) {
    console.log(e.target.id + "helo");
    insert(e.target.id);
  }
  if (e.target.classList.contains("cr")) {
    console.log(e.target.id + "cr");
    cross(e.target.id);
  }
});

let add = (id) => {
  let idsplit = id.split("-");
  let idnum = Number(idsplit[1]);
  document.querySelector(
    `#mainContainer-${idnum} #insert-${idnum}`
  ).style.display = "inline";
};

let insert = (id) => {
  console.log(id + "hinsert");
  let idsplit = id.split("-");
  let idnum = Number(idsplit[1]);
  console.log(idnum + "hinsert");

  let insertElement = document.querySelector(
    `#mainContainer-${idnum} #name-${idnum}`
  ).value;
  console.log(insertElement + " hinsert");
  document.querySelector(
    `#mainContainer-${idnum} #insert-${idnum}`
  ).disabled = true;

  if (insertElement != "") {
    value.push(insertElement);
    for (let i of value) {
      if (!alreadyAppended.includes(i)) {
        let divElement;
        divElement = document.createElement("div");
        divElement.id = "div-" + idnum;

        const radioElement = document.createElement("input");
        radioElement.type = "radio";
        radioElement.name = "group";
        radioElement.id = `radio-${idnum}`;
        radioElement.style.cursor = "pointer";

        const labelElement = document.createElement("span");
        labelElement.setAttribute("for", `radio-${idnum}`);
        labelElement.textContent = i;
        labelElement.style.paddingLeft = "10px";

        divElement.appendChild(radioElement);
        divElement.appendChild(labelElement);

        document
          .querySelector(`#mainContainer-${idnum} #result-${idnum}`)
          .appendChild(divElement);

        divElement.addEventListener("click", () => {
          divElement.style.display = "none";
          completedList.push(i);
          console.log(completedList);
          let element = document.createElement("div");
          const pElement = document.createElement("del");
          pElement.id = `pElement-${idnum}`;
          pElement.textContent = i;
          pElement.style.opacity = 0.75;
          element.appendChild(pElement);
          document
            .querySelector(`#mainContainer-${idnum} #completed-${idnum}`)
            .appendChild(element);
        });

        alreadyAppended.push(i); //unique identificaiton
        console.log(alreadyAppended);
      }
    }
  }
};

let cross = (id) => {
  console.log(id + "hcross");
  let idsplit = id.split("-");
  let idnum = Number(idsplit[1]);
  console.log(idnum + "jfa");
  document.querySelector(`#insert-${idnum}`).style.display = "none";
  document.querySelector(`#button1-${idnum}`).disabled = false;
  document.querySelector(`#button1-${idnum}`).style.backgroundColor = "#87f9ea";
  document.querySelector(`#insert-${idnum}`).style.display = "none";
};

let addLists = () => {
  count = count + 1;
  // console.log(count);

  tasksLists.push(tasksLists.length);
  // console.log(tasksLists);
  const tasksListElem = document.getElementById("tasksList");

  for (let taskIndex of tasksLists) {
    if (!alreadyTasksAppended.includes(taskIndex)) {
      const div1 = document.createElement("div"); //mainContainer div
      div1.classList.add(`mainContainer`);
      div1.id = `mainContainer-${taskIndex}`;

      const h3 = document.createElement("h3"); //Title heading
      h3.id = `title`;
      h3.classList.add(`title`);
      h3.textContent = `Todo List`;
      div1.appendChild(h3);

      const div2 = document.createElement("div"); //create the add task button
      div2.id = `create`;
      div2.classList.add(`create`);
      div1.appendChild(div2);
      const button1 = document.createElement("button");
      button1.type = "submit";
      button1.classList.add("button1");
      button1.id = `button1-${taskIndex}`;
      button1.textContent = `Add Tasks `;
      const i1 = document.createElement("i");
      i1.className = `bi bi-plus-circle`;
      button1.appendChild(i1);
      div2.appendChild(button1);
      const hr2 = document.createElement("hr");
      div1.appendChild(hr2);
      hr2.classList.add("titleHr");
      //   button1.addEventListener("click", insert());

      const div3 = document.createElement("div"); //create the add task button
      div3.id = `insert-${taskIndex}`;
      div3.classList.add(`insert`);
      div3.style.display = "none";
      const input1 = document.createElement("input");
      input1.type = "text";
      input1.name = `name-${taskIndex}`;
      input1.id = `name-${taskIndex}`;
      input1.classList.add(`name`);
      input1.placeholder = `Enter the List of tasks`;
      const i2 = document.createElement("i");
      i2.className = `bi bi-check`;
      i2.classList.add("in");
      i2.id = `in-${taskIndex}`;
      const i3 = document.createElement("i");
      i3.className = `bi bi-x`;
      i3.classList.add("cr");
      i3.id = `cr-${taskIndex}`;
      div1.appendChild(div3);
      div3.appendChild(input1);
      div3.appendChild(i2);
      div3.appendChild(i3);

      const div4 = document.createElement("div");
      div4.classList.add(`result`);
      div4.id = `result-${taskIndex}`;
      const h2 = document.createElement("h3");
      h2.id = `pending-${taskIndex}`;
      h2.classList.add("pending");
      h2.textContent = "Pending Tasks";
      div1.appendChild(div4);
      div4.appendChild(h2);
      const hr3 = document.createElement("hr");
      hr3.classList.add("pendingHr");
      div4.appendChild(hr3);

      const div5 = document.createElement("div");
      div5.classList.add(`completed`);
      div5.id = `completed-${taskIndex}`;
      const h1 = document.createElement("h3");
      h1.id = `complete-${taskIndex}`;
      h1.classList.add(`complete`);
      h1.textContent = "Completed Tasks";
      div1.appendChild(div5);
      div5.appendChild(h1);
      const hr4 = document.createElement("hr");
      hr4.classList.add("pendingHr");
      div5.appendChild(hr4);

      //   const

      //append Elements
      tasksListElem.appendChild(div1);

      //   tasksListElem.appendChild(hr1);
      alreadyTasksAppended.push(taskIndex);
      // console.log(alreadyTasksAppended+" tasks appended");
    }
  }
};

//   console.log(item);
//   item++;
addLists();
