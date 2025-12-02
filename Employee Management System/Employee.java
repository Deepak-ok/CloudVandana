import java.util.ArrayList;
import java.util.List;

class EmployeeDetails {
    // Attributes
    private int id;
    private String name;
    private double salary;

    // Constructor
    public EmployeeDetails(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class Employee {
    public static void main(String[] args) {
        // Create EmployeeDetails objects
        EmployeeDetails emp1 = new EmployeeDetails(101, "Alice", 50000);
        EmployeeDetails emp2 = new EmployeeDetails(102, "Bob", 60000);
        EmployeeDetails emp3 = new EmployeeDetails(103, "Charlie", 55000);

        // Store them in a list
        List<EmployeeDetails> employees = new ArrayList<>();
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);

        // Display their details
        System.out.println("Employee Details:");
        for (EmployeeDetails emp : employees) {
            emp.displayDetails();
        }
    }
}