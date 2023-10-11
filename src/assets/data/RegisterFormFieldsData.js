import departments from "../../assets/data/departments";

const inputData = [
  {
    inputType: "input",
    type: "text",
    name: "name",
    placeholderText: "name",
  },
  {
    inputType: "input",
    type: "text",
    name: "surname",
    placeholderText: "surname",
  },
  {
    inputType: "input",
    type: "email",
    name: "email",
    placeholderText: "email",
  },
  {
    inputType: "input",
    type: "password",
    name: "password",
    placeholderText: "password",
  },
  { inputType: "input", name: "id", placeholderText: "staff/student id" },
];

const selectData = [
  {
    name: "role",
    options: ["staff", "student", "manager"],
    placeholderText: "select Role",
    defaultValues: "",
  },
  {
    name: "department",
    options: departments,
    placeholderText: "select Department",
    defaultValues: "",
  },
];

export { inputData, selectData };
