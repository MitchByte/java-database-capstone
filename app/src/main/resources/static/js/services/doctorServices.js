import { API_BASE_URL } from "../config/config.js";

const DOCTOR_API = `${API_BASE_URL}/doctor`;

export async function deleteDoctor(doctorId, token) {
  try {
    const response = await fetch(`${DOCTOR_API}/${encodeURIComponent(doctorId)}/${encodeURIComponent(token)}`, {
      method: "DELETE",
    });
    const result = await response.json().catch(() => ({}));

    return {
      success: response.ok,
      message: result.message || (response.ok ? "Doctor deleted successfully." : "Could not delete the doctor."),
    };
  } catch (error) {
    console.error("Failed to delete doctor:", error);
    return { success: false, message: "A network error prevented deleting the doctor." };
  }
}
