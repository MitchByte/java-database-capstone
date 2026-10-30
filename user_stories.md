# User Stories

## Admin User Stories

### Admin 1: Log in

**Title:**
_As an admin, I want to log into the portal with my username and password, so that I can manage the platform securely._

**Acceptance Criteria:**

1. An admin can log in using a valid username and password.
2. Invalid credentials are rejected with a clear error message.
3. Only authenticated admins can access platform-management features.

**Priority:** High
**Story Points:** 3
**Notes:**

- Protect the admin account and platform data from unauthorized access.

### Admin 2: Log out

**Title:**
_As an admin, I want to log out of the portal, so that system access is protected._

**Acceptance Criteria:**

1. A logged-in admin can select a visible log-out action.
2. Logging out ends the active session and returns the admin to a signed-out view.
3. Protected platform-management pages are no longer accessible using the ended session.

**Priority:** High
**Story Points:** 2
**Notes:**

- The admin can log in again after logging out.

### Admin 3: Add doctors

**Title:**
_As an admin, I want to add doctors to the portal, so that they can provide services to patients._

**Acceptance Criteria:**

1. An authenticated admin can create a doctor profile with the required information.
2. The system validates required fields and provides clear feedback for invalid input.
3. A successfully added doctor appears in the doctor list available through the portal.

**Priority:** High
**Story Points:** 5
**Notes:**

- Ensure doctor profiles contain the information needed for patients to identify and book doctors.

### Admin 4: Delete doctor profiles

**Title:**
_As an admin, I want to delete a doctor's profile from the portal, so that outdated or inactive profiles are no longer available._

**Acceptance Criteria:**

1. An authenticated admin can select a doctor profile for removal.
2. The system asks for confirmation before deleting the profile.
3. After confirmation, the doctor profile is removed from patient-facing doctor lists.

**Priority:** Medium
**Story Points:** 3
**Notes:**

- Consider the handling of existing appointments associated with the doctor before removal.

### Admin 5: View monthly appointment statistics

**Title:**
_As an admin, I want to run a stored procedure in the MySQL CLI to get the number of appointments per month, so that I can track usage statistics._

**Acceptance Criteria:**

1. A stored procedure calculates appointment totals grouped by month.
2. The procedure can be run from the MySQL CLI and returns the monthly totals in a readable format.
3. The results include only appointments within the data available in the system and correctly handle months with no appointments.

**Priority:** Medium
**Story Points:** 5
**Notes:**

- Define whether cancelled appointments are included in the monthly totals.

## Patient User Stories

### Patient 1: Browse doctors without logging in

**Title:**
_As a patient, I want to view a list of doctors without logging in, so that I can explore my options before registering._

**Acceptance Criteria:**

1. Visitors can view the doctors list without creating an account or logging in.
2. Each doctor entry shows useful details, such as the doctor's name and specialty.
3. A helpful message is shown if no doctors are available.

**Priority:** Medium
**Story Points:** 3
**Notes:**

- Viewing the list does not require patient authentication.

### Patient 2: Sign up

**Title:**
_As a patient, I want to sign up using my email and password, so that I can book appointments._

**Acceptance Criteria:**

1. A visitor can create a patient account by entering an email address and password.
2. The system validates the required fields and reports invalid or already-registered email addresses clearly.
3. After successful registration, the patient can log in with the new credentials.

**Priority:** High
**Story Points:** 5
**Notes:**

- Passwords must be stored securely and never displayed in plain text.

### Patient 3: Log in and manage bookings

**Title:**
_As a patient, I want to log into the portal to manage my bookings, so that I can keep track of my appointments._

**Acceptance Criteria:**

1. A registered patient can log in with their email address and password; invalid credentials produce a clear error message.
2. After logging in, the patient can access the booking-management features.
3. The patient can manage only their own bookings.

**Priority:** High
**Story Points:** 5
**Notes:**

- Do not expose one patient's appointment information to another patient.

### Patient 4: Log out

**Title:**
_As a patient, I want to log out of the portal, so that I can secure my account._

**Acceptance Criteria:**

1. A logged-in patient can select a visible log-out action.
2. Logging out ends the patient's active session and returns them to a signed-out view.
3. Protected booking pages are no longer accessible using the ended session.

**Priority:** High
**Story Points:** 2
**Notes:**

- The patient should be able to log in again after logging out.

### Patient 5: Book an hour-long appointment

**Title:**
_As a patient, I want to log in and book an hour-long appointment, so that I can consult with a doctor._

**Acceptance Criteria:**

1. Only a logged-in patient can book an appointment.
2. The patient can select an available doctor and appointment time for a one-hour consultation.
3. The system prevents conflicting bookings and confirms a successful appointment.

**Priority:** High
**Story Points:** 5
**Notes:**

- Appointment availability must be checked before confirming the booking.

### Patient 6: View upcoming appointments

**Title:**
_As a patient, I want to view my upcoming appointments, so that I can prepare accordingly._

**Acceptance Criteria:**

1. A logged-in patient can view a list of their upcoming appointments.
2. Each appointment displays the doctor's name, date, time, and relevant appointment details.
3. The list includes only the signed-in patient's appointments and shows an informative empty state if there are none.

**Priority:** Medium
**Story Points:** 3
**Notes:**

- Patients must not be able to view another patient's appointments.

## Doctor User Stories

### Doctor 1: Log in

**Title:**
_As a doctor, I want to log into the portal, so that I can manage my appointments._

**Acceptance Criteria:**

1. A registered doctor can log in with their credentials.
2. Successful login provides access to appointment-management features.
3. Invalid credentials are rejected with a clear error message.

**Priority:** High
**Story Points:** 3
**Notes:**

- Appointment data must only be available to authenticated users with the doctor role.

### Doctor 2: Log out

**Title:**
_As a doctor, I want to log out of the portal, so that I can protect my data._

**Acceptance Criteria:**

1. A logged-in doctor can select a visible log-out action.
2. Logging out ends the active session and returns the doctor to a signed-out view.
3. Protected appointment and patient information is no longer accessible using the ended session.

**Priority:** High
**Story Points:** 2
**Notes:**

- The doctor can log in again after logging out.

### Doctor 3: View appointment calendar

**Title:**
_As a doctor, I want to view my appointment calendar, so that I can stay organized._

**Acceptance Criteria:**

1. A logged-in doctor can view appointments in a calendar organized by date and time.
2. Each calendar entry shows relevant appointment details, including the patient and appointment time.
3. The calendar shows an informative empty state when no appointments are scheduled.

**Priority:** High
**Story Points:** 5
**Notes:**

- Only the logged-in doctor's appointments should appear.

### Doctor 4: Mark unavailability

**Title:**
_As a doctor, I want to mark when I am unavailable, so that patients can see only the appointment slots I can offer._

**Acceptance Criteria:**

1. A logged-in doctor can mark dates or time periods as unavailable.
2. Unavailable periods cannot be selected by patients when booking appointments.
3. The doctor can review and update their marked unavailability.

**Priority:** High
**Story Points:** 5
**Notes:**

- Changes to availability should be reflected in the patient-facing booking options.

### Doctor 5: Update profile

**Title:**
_As a doctor, I want to update my profile with my specialization and contact information, so that patients have up-to-date information._

**Acceptance Criteria:**

1. A logged-in doctor can view and update their specialization and contact information.
2. The system validates required fields and provides clear feedback for invalid input.
3. Saved profile changes are displayed in the doctor profile shown to patients.

**Priority:** Medium
**Story Points:** 3
**Notes:**

- Doctors can update only their own profile.

### Doctor 6: View patient details

**Title:**
_As a doctor, I want to view patient details for upcoming appointments, so that I can be prepared._

**Acceptance Criteria:**

1. A logged-in doctor can open patient details for their upcoming appointments.
2. The displayed details are limited to information relevant to preparing for the appointment.
3. The doctor cannot view patient details for appointments assigned to other doctors.

**Priority:** High
**Story Points:** 3
**Notes:**

- Patient information must be protected and accessible only to authorized users.
