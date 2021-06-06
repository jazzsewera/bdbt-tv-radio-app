package bdbt.backend.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/person")
public class PersonController {

    private final PersonDAO dao;

    @Autowired
    public PersonController(PersonDAO dao) {
        this.dao = dao;
    }

    @RequestMapping("")
    public String viewHomePage(Model model) {

        List<Person> listPerson = dao.list();
        model.addAttribute("listPerson", listPerson);
        return "index-person";
    }

    @RequestMapping("/new")
    public String showNewForm(Model model) {
        Person person = new Person();
        model.addAttribute("person", person);
        return "new-person";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(@ModelAttribute("person") Person person) {
        dao.save(person);
        return "redirect:/person";
    }

    @RequestMapping("/edit/{id}")
    public ModelAndView showEditForm(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit-person");
        Person person = dao.get(id);
        mav.addObject("person", person);
        return mav;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String update(@ModelAttribute("person") Person person) {
        dao.update(person);
        return "redirect:/person";
    }

    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(name = "id") int id) {
        dao.delete(id);
        return "redirect:/person";
    }

}
