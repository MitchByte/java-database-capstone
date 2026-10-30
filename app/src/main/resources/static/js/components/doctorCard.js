import { deleteDoctor } from "../services/doctorServices.js";
import { getPatientData } from "../services/patientServices.js";
import { showBookingOverlay } from "../loggedPatient.js";

export function createDoctorCard(doctor) {
  const card = document.createElement("article");
  card.classList.add("doctor-card");

  const role = localStorage.getItem("userRole");
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("doctor-info");

  const name = document.createElement("h3");
  name.textContent = doctor.name || "Doctor name unavailable";

  const specialty = document.createElement("p");
  specialty.textContent = `Specialty: ${doctor.specialty || "Not specified"}`;

  const email = document.createElement("p");
  email.textContent = `Email: ${doctor.email || "Not specified"}`;

  const availability = document.createElement("p");
  const availableTimes = Array.isArray(doctor.availableTimes) ? doctor.availableTimes : [];
  availability.textContent = `Availability: ${availableTimes.length ? availableTimes.join(", ") : "Not listed"}`;

  infoDiv.append(name, specialty, email, availability);

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("card-actions");

  if (role === "admin") {
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Delete";
    removeBtn.addEventListener("click", async () => {
      if (!window.confirm(`Delete Dr. ${doctor.name || "this doctor"}?`)) return;

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Your session has expired. Please log in again.");
        localStorage.removeItem("userRole");
        window.location.href = "/";
        return;
      }

      removeBtn.disabled = true;
      try {
        const result = await deleteDoctor(doctor.id, token);
        if (result.success) {
          card.remove();
        } else {
          alert(result.message || "Could not delete this doctor.");
          removeBtn.disabled = false;
        }
      } catch (error) {
        console.error("Failed to delete doctor:", error);
        alert("An error occurred while deleting the doctor.");
        removeBtn.disabled = false;
      }
    });
    actionsDiv.appendChild(removeBtn);
  } else if (role === "patient") {
    const bookNow = document.createElement("button");
    bookNow.type = "button";
    bookNow.textContent = "Book Now";
    bookNow.addEventListener("click", () => {
      alert("Please log in to your patient account before booking an appointment.");
    });
    actionsDiv.appendChild(bookNow);
  } else if (role === "loggedPatient") {
    const bookNow = document.createElement("button");
    bookNow.type = "button";
    bookNow.textContent = "Book Now";
    bookNow.addEventListener("click", async (event) => {
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.setItem("userRole", "patient");
        window.location.href = "/pages/patientDashboard.html";
        return;
      }

      bookNow.disabled = true;
      try {
        const patientData = await getPatientData(token);
        if (!patientData) {
          alert("Could not load your patient profile. Please log in again.");
          localStorage.removeItem("token");
          localStorage.setItem("userRole", "patient");
          window.location.href = "/pages/patientDashboard.html";
          return;
        }
        showBookingOverlay(event, doctor, patientData);
      } catch (error) {
        console.error("Could not prepare appointment booking:", error);
        alert("An error occurred while preparing your appointment.");
      } finally {
        bookNow.disabled = false;
      }
    });
    actionsDiv.appendChild(bookNow);
  }

  card.append(infoDiv, actionsDiv);
  return card;
}
