# (MENU) Organization

- Organization Details
- Role Management
- User Management

# Organization Details

```json
{
  "organization_id": "00000000-0000-0000-0000-000000000000",
  "logo": "logo.jpg",
  "name": "University A",
  "email": "gsbolisay925@gmail.com",
  "contact_no": "09501324560",
  "complete_address": "some address",
  "city": "some city",
  "district": "disctrict A",
  "postal": "3100"
}
```

# Roles

Roles provides key access to endpoints and pages.

1. Administration

```json
{
  "role_id": "00000000-0000-0000-0000-000000000000",
  "role": "Administration"
}
```

### Role Definition

- Grants system full access

2. Admin

```json
{
  "role_id": "00000000-0000-0000-0000-000000000000",
  "role": "Admin"
}
```

### Role Definition

- Student Admission
- Manage Classes
- Configure Class Grading Scheme ?
- Configure Grading System ?
- Visit Teacher
- Manage Student Information
- Password reset for teachers, students, and parents
- Reports

3. Teacher

```json
{
  "role_id": "00000000-0000-0000-0000-000000000000",
  "role": "Teacher"
}
```

### Role Definition

- Manage Class Assessment Types
- Manage Class Grading Scheme
- Manage Class Assessment Entries
- View Assessment Analytics
- Upload Marks CSV format
- Down Marks CSV format
- Change password

4. Student

```json
{
  "role_id": "00000000-0000-0000-0000-000000000000",
  "role": "Student"
}
```

### Role Definition

- View Assessment Scores
- Upload Materials for assessment
- View Profile
- View Student Analytics
- Change password

5. Parent

```json
{
  "role_id": "00000000-0000-0000-0000-000000000000",
  "role": "Parent"
}
```

### Role Definition

- View Childrens Profile
- View Child's Academic Progress with analytics
- View Profile
- Change password

# Academic Year

1. Educational Stages

```json
{
  "es_id": "00000000-0000-0000-0000-000000000000",
  "title": "Pre-Primary",
  "description": "some description"
}
```

### Definition

- defines school educational stages like pre-primary, primary, secondary and tertiary.

### Dependencies

- NONE

2. Grading System

A set of rules and policies that determine how grades are assigned to students. It includes the grading scale, the minimum passing grade, and the weight of each assignment.

### Dependencies

- NONE

```json
{
  "grading_system_id": "00000000-0000-0000-0000-000000000000",
  "letter": "A+",
  "percentage": "99%",
  "gpa": "4.0",
  "es_id": "00000000-0000-0000-0000-000000000000"
}
```

### Definition

- defines grading system use for the academic year

3. Grading System

A set of rules and policies that determine how grades are assigned to students. It includes the grading scale, the minimum passing grade, and the weight of each assignment.

### Dependencies

- NONE

```json
{
  "grading_system_id": "00000000-0000-0000-0000-000000000000",
  "letter": "A+",
  "percentage": "99%",
  "gpa": "4.0",
  "es_id": "00000000-0000-0000-0000-000000000000"
}
```

### Definition

- defines grading system use for the academic year

--Grading System (req. educational stage ID)

--Year (req. educational stage ID)
----Semester (req. AcadYearID)
------Year Levels (req. SemesterID)
------Classes (req. SemesterID, may include multiple year level ID, one teacher)
--------Tag Students (req. ClassID. Tag Students StudentID, a class may contain multiple students)
--------Tag Teachers (req. ClassID. Tag Students StudentID, a class may only contain single teacher)

--------Grading Scheme (Default schemes is set by Administration Admin. Teacher can create new grading scheme, copy and
modify default schemes. Can be tagged to multiple Classes)
------Assessment Types (req. ClassID. Default assessment types are defined by Administration Admin.
Teacher can create new assessment type, can copy and modify default assessment type.)
--------Activities (req. ClassID, Grading Scheme ID, Activity Details)
