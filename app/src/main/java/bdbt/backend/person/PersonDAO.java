package bdbt.backend.person;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class PersonDAO {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PersonDAO(JdbcTemplate jdbcTemplate) {
        super();
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Person> list() {
        String sql = "SELECT * FROM PERSON";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Person.class));
    }

    public void save(Person person) {
        SimpleJdbcInsert insertActor = new SimpleJdbcInsert(jdbcTemplate);
        insertActor.withTableName("person").usingColumns("person_id", "name", "surname", "company_id");
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(person);
        insertActor.execute(param);
    }

    public Person get(int person_id) {
        String sql = "SELECT * FROM PERSON WHERE PERSON_ID = " + person_id;
        return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Person.class));
    }

    public void update(Person person) {
        String sql = "UPDATE PERSON SET NAME=:name, SURNAME=:surname, COMPANY_ID=:company_id WHERE PERSON_ID = :person_id";
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(person);
        NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(jdbcTemplate);
        template.update(sql, param);
    }

    public void delete(int person_id) {
        String sql = "DELETE FROM PERSON WHERE PERSON_ID = ?";
        jdbcTemplate.update(sql, person_id);
    }
}
