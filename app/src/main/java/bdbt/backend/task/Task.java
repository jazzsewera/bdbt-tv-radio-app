package bdbt.backend.task;

import lombok.Data;

import java.sql.Date;

@Data
public class Task {
    private int task_id;
    private int employee_id;
    private int person_id;
    private int production_id;
    private String title;
    private String description;
    private String status;
    private Date date;
}
