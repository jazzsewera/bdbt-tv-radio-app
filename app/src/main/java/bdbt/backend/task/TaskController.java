package bdbt.backend.task;

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
@RequestMapping("/task")
public class TaskController {

    private final TaskDAO dao;

    @Autowired
    public TaskController(TaskDAO dao) {
        this.dao = dao;
    }

    @RequestMapping("")
    public String viewHomePage(Model model) {
        List<Task> listTask = dao.list();
        model.addAttribute("listTask", listTask);
        return "index-task";
    }

    @RequestMapping("/new")
    public String showNewForm(Model model) {
        Task task = new Task();
        model.addAttribute("task", task);
        return "new-task";
    }

    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public String save(@ModelAttribute("task") Task task) {
        dao.save(task);
        return "redirect:/task";
    }

    @RequestMapping("/edit/{id}")
    public ModelAndView showEditForm(@PathVariable(name = "id") int id) {
        ModelAndView mav = new ModelAndView("edit-task");
        Task task = dao.get(id);
        mav.addObject("task", task);
        return mav;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public String update(@ModelAttribute("task") Task task) {
        dao.update(task);
        return "redirect:/task";
    }

    @RequestMapping("/delete/{id}")
    public String delete(@PathVariable(name = "id") int id) {
        dao.delete(id);
        return "redirect:/task";
    }

}
