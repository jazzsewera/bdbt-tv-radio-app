package bdbt.backend.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class LoginController {
    @RequestMapping("/login")
    public String viewLoginPage() {
        return "login";
    }

    @RequestMapping("/login-retry")
    public String viewLoginRetryPage() {
        return "login-retry";
    }

    @RequestMapping("/logout")
    public String viewLoginPageAfterLogout() {
        return "login";
    }
}
