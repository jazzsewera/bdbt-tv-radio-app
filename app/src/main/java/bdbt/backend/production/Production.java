package bdbt.backend.production;

import lombok.Data;

@Data
public class Production {
    private int production_id;
    private String title;
    private String description;
    private int client_company_id;
}
