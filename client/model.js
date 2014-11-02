window.Board = function (name, numberOfColumns) {
  return {
    name: name,
    numberOfColumns: numberOfColumns,
    columns: [],
    backlogs: []
  };
}

window.Column =function (name) {
  return {
    name: name,
    cards: []
  };
}

function Backlog(name) {
  return {
    name: name,
    phases: []
  };
}

function Phase(name) {
  return {
    name: name,
    cards: []
  };
}

window.Card = function (title, status, details) {
  this.title = title;
  this.status = status;
  this.details = details;
  return this;
}
