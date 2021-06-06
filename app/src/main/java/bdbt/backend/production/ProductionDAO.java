package bdbt.backend.production;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

@Repository
public class ProductionDAO {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public ProductionDAO(JdbcTemplate jdbcTemplate) {
        super();
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Production> list() {
        String sql = "SELECT * FROM PRODUCTION";
        return jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Production.class));
    }

    public void save(Production production) {
        SimpleJdbcInsert insertActor = new SimpleJdbcInsert(jdbcTemplate);
        insertActor.withTableName("production").usingColumns("production_id", "name", "surname", "company_id");
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(production);
        insertActor.execute(param);
    }

    public Production get(int production_id) {
        String sql = "SELECT * FROM PRODUCTION WHERE PRODUCTION_ID = " + production_id;
        return jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Production.class));
    }

    public void update(Production production) {
        String sql = "UPDATE PRODUCTION SET TITLE=:title, DESCRIPTION=:description, CLIENT_COMPANY_ID=:client_company_id WHERE PRODUCTION_ID = :production_id";
        BeanPropertySqlParameterSource param = new BeanPropertySqlParameterSource(production);
        NamedParameterJdbcTemplate template = new NamedParameterJdbcTemplate(jdbcTemplate);
        template.update(sql, param);
    }

    public void delete(int production_id) {
        String sql = "DELETE FROM PRODUCTION WHERE PRODUCTION_ID = ?";
        jdbcTemplate.update(sql, production_id);
    }
}
