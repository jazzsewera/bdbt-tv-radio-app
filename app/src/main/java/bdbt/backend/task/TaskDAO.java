package bdbt.backend.task;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class TaskDAO {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public TaskDAO(JdbcTemplate jdbcTemplate) {
        super();
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Task> list() {
        String sql = "SELECT * FROM TASK";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Task.class));
    }

    public void save(Task task) {
        SimpleJdbcInsert insertActor = new SimpleJdbcInsert(jdbcTemplate);
        insertActor.withTableName("task").usingColumns("task_id", "employee_id", "person_id", "production_id", "title", "description", "status", "deadline");
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(task);
        insertActor.execute(param);
    }

    public Task get(int task_id) {
        String sql = "SELECT * FROM TASK WHERE TASK_ID = " + task_id;
        return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Task.class));
    }

    public void update(Task task) {
        String sql = "UPDATE TASK SET EMPLOYEE_ID=:employee_id, PERSON_ID=:person_id, PRODUCTION_ID=:production_id, TITLE=:title, DESCRIPTION=:description, STATUS=:status, DEADLINE=:deadline WHERE TASK_ID = :task_id";
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(task);
        NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(jdbcTemplate);
        template.update(sql, param);
    }

    public void delete(int task_id) {
        String sql = "DELETE FROM TASK WHERE TASK_ID = ?";
        jdbcTemplate.update(sql, task_id);
    }
}
