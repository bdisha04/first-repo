const form = document.getElementById("reservationForm");
const tableBody = document.querySelector("#reservationTable tbody");

document.addEventListener("DOMContentLoaded", loadReservations);

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const reservation = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    bookTitle: document.getElementById("bookTitle").value,
    authorName: document.getElementById("authorName").value,
    pickupDate: document.getElementById("pickupDate").value
  };

  saveReservation(reservation);

  addReservationToTable(reservation);

  form.reset();
});

function saveReservation(reservation) {
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  reservations.push(reservation);
  localStorage.setItem("reservations", JSON.stringify(reservations));
}

function loadReservations() {
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  reservations.forEach(reservation => addReservationToTable(reservation));
}

function addReservationToTable(reservation) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${reservation.fullName}</td>
    <td>${reservation.email}</td>
    <td>${reservation.phone}</td>
    <td>${reservation.bookTitle}</td>
    <td>${reservation.authorName}</td>
    <td>${reservation.pickupDate}</td>
  `;
  tableBody.appendChild(row);
}
