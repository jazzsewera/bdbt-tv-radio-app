package bdbt.backend.production;

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
@RequestMapping("/production")
public class ProductionController {

    private final ProductionDAO dao;

    @Autowired
    public ProductionController(ProductionDAO dao) {
        this.dao = dao;
    }

    @RequestMapping("")
    public String viewHomePage(Model model) {
        List<Production> listProduction = dao.list();
        model.addAttribute("listProduction", listProduction);
        return "index-production";
    }

    @RequestMapping("/new")
    public String showNewForm(Model model) {
        Production production = new Production();
        model.addAttribute("production", production);
        return "new-production";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(@ModelAttribute("production") Production production) {
        dao.save(production);
        return "redirect:/production";
    }

    @RequestMapping("/edit/{id}")
    public ModelAndView showEditForm(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit-production");
        Production production = dao.get(id);
        mav.addObject("production", production);
        return mav;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String update(@ModelAttribute("production") Production production) {
        dao.update(production);
        return "redirect:/production";
    }

    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(name = "id") int id) {
        dao.delete(id);
        return "redirect:/production";
    }

}
