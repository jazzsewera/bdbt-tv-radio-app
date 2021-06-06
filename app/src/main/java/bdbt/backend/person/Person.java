package bdbt.backend.person;

import lombok.Data;

@Data
public class Person {
    private int person_id;
    private String name;
    private String surname;
    private int company_id;
}
