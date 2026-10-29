## Architecture summary
This Spring Boot application uses in the User Interface Layer Thymeleaf templates for the Admin and Doctor dashboards, while REST APIs serve all other modules.
In the Controller Layer this application uses both MVC and REST controllers.
The Service layer communicates with the Repository Layer to perform data access operations. This means the controllers route requests through the service layer,
which in turn delegates to the appropriate repositories. 
Trough the repository Layer the apllication has access to two databases—MySQL (for patient, doctor, appointment, and admin data) and MongoDB (for prescriptions).
Once data is retrieved from the database, it is mapped into Java model classes like MySQL uses JPA entities while MongoDB uses document models.

## Numbered flow of data and control
1. User accesses AdminDashboard or Appointment pages.
2. The action is routed to the appropriate Thymeleaf or REST controller.
3. All controllers delegate logic to the Service Layer.
4. The Service layer communicates with the Repository Layer to perform data access operations.
5. Each repository interfaces directly with the underlying database engine like MySQL and MongoDB.
6. Once data is retrieved from the database, it is mapped into Java model classes that the application can work with like JPA entities or document models.
7. Finally, the bound models are used in the response layer with MVC flows and REST flows
