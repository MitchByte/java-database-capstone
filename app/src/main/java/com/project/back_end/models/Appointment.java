package com.project.back_end.models;

@Entity
public class Appointment {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  @ManyToOne
  @JoinColumn(name = "doctor_id", nullable = false)
  private Doctor doctor;

  @NotNull
  @ManyToOne
  @JoinColumn(name = "patient_id", nullable = false)
  private Patient patient;

  @NotNull
  @Future(message = "Appointment time must be in the future")
  private LocalDateTime appointmentTime;

  @NotNull
  private int status;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Doctor getDoctor() {
    return doctor;
  }

  public void setDoctor(Doctor doctor) {
    this.doctor = doctor;
  }

  public Patient getPatient() {
    return patient;
  }

  public void setPatient(Patient patient) {
    this.patient = patient;
  }

  public LocalDateTime getAppointmentTime() {
    return appointmentTime;
  }

  public void setAppointmentTime(LocalDateTime appointmentTime) {
    this.appointmentTime = appointmentTime;
  }

  public int getStatus() {
    return status;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  @Transient
  public LocalDateTime getEndTime() {
    return appointmentTime == null ? null : appointmentTime.plusHours(1);
  }

  @Transient
  public LocalDate getAppointmentDate() {
    return appointmentTime == null ? null : appointmentTime.toLocalDate();
  }

  @Transient
  public LocalTime getAppointmentTimeOnly() {
    return appointmentTime == null ? null : appointmentTime.toLocalTime();
  }

}

