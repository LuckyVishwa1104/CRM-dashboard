package com.crmdashboard.crm;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloWorldController {
    @RequestMapping("/hello")
    public String hello() {
        return "HEllo world";
    }
    
}
