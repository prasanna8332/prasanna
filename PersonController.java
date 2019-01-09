package com.objectfrontier.training.ws.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.objectfrontier.training.ws.model.Person;
import com.objectfrontier.training.ws.service.PersonService;

@Controller
public class PersonController {

    @Autowired
    PersonService personService;

    // create
    @RequestMapping(value = "/person", method = RequestMethod.PUT)
    public ResponseEntity<Person> doPut(@RequestBody Person person) throws Exception {
        personService.create(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    // update
    @RequestMapping(value = "/person", method = RequestMethod.POST)
    public ResponseEntity<Person> doPost(@RequestBody Person person) throws Exception {
        personService.update(person);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    // delete
    @RequestMapping(value = "/person/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Person> doDelete(@PathVariable int id) throws Exception {
        personService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // read
    @RequestMapping(value = "/person", method = RequestMethod.GET)
    @ResponseBody
    public Person doGet(@RequestParam int id, @RequestParam boolean includeAddress) throws Exception {
        Person person = personService.read(includeAddress, id);
//        return new ResponseEntity<>(person, HttpStatus.OK);
        return person;
    }

    // readAll
    @RequestMapping(value = "/person", method = RequestMethod.GET)
    @ResponseBody
    public List doGetAll() throws Exception {
        List readAll = personService.readAll();
        return readAll;
//        return new ResponseEntity<>(HttpStatus.OK);
    }
}