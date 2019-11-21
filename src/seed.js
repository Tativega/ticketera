const { Status, Ticket } = require("./db/models/index");

Status.create({ state: "open" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "process" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "close" }).then(state =>
  console.log(JSON.stringify(state))
);
Status.create({ state: "rejected" }).then(state =>
  console.log(JSON.stringify(state))
);

Ticket.findByPk(1).then(ticket => {
  ticket.addTag(1);
});

Ticket.findByPk(39).then(ticket => {
  ticket.addTag(1);
});

Ticket.findByPk(39).then(ticket => {
  ticket.addTag(2);
});

Ticket.findByPk(38).then(ticket => {
  ticket.addTag(2);
});


