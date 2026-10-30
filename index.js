//Write your code here

// const attendee = {
//   attendeeId: "T001",
//   name: "Alice Smith",
//   event: "JavaScript Conference",
//   ticketType: "VIP",
//   ticketPrice: 150.00
// };

// function logAttendeeName(attendee) {
//   console.log(attendee.name);
// }

// logAttendeeName(attendee); // Alice Smith

// function logTicketPrice(attendee) {
//   console.log(attendee.ticketPrice);
// }

// logTicketPrice(attendee); // 150

// function updateTicketType(attendee, newTicketType) {
//   attendee.ticketType = newTicketType;
// }

// updateTicketType(attendee, "General");
// console.log(attendee.ticketType); // General

// function updateTicketPrice(attendee, newTicketPrice) {
//   attendee.ticketPrice = newTicketPrice;
// }

// updateTicketPrice(attendee, 200);
// console.log(attendee.ticketPrice); // 200

// function removeEventProperty(attendee) {
//   delete attendee.event;
// }

// removeEventProperty(attendee);
// console.log(attendee.event); // undefined

// function addCheckedInProperty(attendee) {
//   attendee.checkedIn = true;
// }

// addCheckedInProperty(attendee);
// console.log(attendee.checkedIn); // true

// //Needed for the tests to work. Don't modify
// module.exports = {
//   ...(typeof attendee !== 'undefined' && { attendee }),
//   ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
//   ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
//   ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
//   ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
//   ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
//   ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
// };





const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

function logAttendeeName(attendee) {
  console.log(attendee.name);
}

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice;
}

function removeEventProperty(attendee) {
  delete attendee.event;
}

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};