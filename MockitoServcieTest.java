package com.objectfrontier.training.ws.test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.objectfrontier.training.ws.model.Address;
import com.objectfrontier.training.ws.model.Person;
import com.objectfrontier.training.ws.service.AddressService;
import com.objectfrontier.training.ws.service.PersonService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/root-context.xml", "classpath*:spring/appServlet/servlet-context.xml" })
public class MockitoServcieTest {

    @InjectMocks
    private AddressService addressService = new AddressService();

    @InjectMocks
    private PersonService personServiceMock = new PersonService(addressService);

    @Mock
    private AddressService addressServiceMock;

    @Mock
    private Session session;

    @SuppressWarnings("rawtypes")
    @Mock
    private Query query;
    Person expected;

    @Before
    public  void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testRead() {

        expected = new Person(1, "updated fn", "kumar", "prgf@123", Date.valueOf("1996-02-21"), Date.valueOf("2018-11-27")
                            , new Address(2, "second avenue", "Chennai", 601245), "password", true);

         when(session.get(Person.class, 1)).thenReturn(expected);
        assertEquals(session.get(Person.class, 1), expected);
    }

    @Test
    public void readAllTest() {

        List<Person> persons = new ArrayList<>();
        persons.add(new Person(1, "updated fn", "kumar", "prgf@123", Date.valueOf("1996-02-21"), Date.valueOf("2018-11-27")
                    , new Address(2, "second avenue", "Chennai", 601245), "password", true));

        when(query.list()).thenReturn(persons);
        assertEquals(persons, query.list());
    }

    @Test
    public void testCreate() {

        Person person = new Person("jsayakrishna", "skrishna", "jsaye@gmail.com", Date.valueOf("1998-05-25"),
                new Address("pallavaram street", "nellore", 52852), "password", false);

        when(session.save(person)).thenReturn((Serializable) person);
        assertEquals(person, session.save(person));
    }

    @Test
    public void testUpdate() {

        Person person = new Person(1,"jayakrishna", "krishna", "jaye@gmail.com", Date.valueOf("1998-05-25"),
              new Address(2, "pallavaram street", "nellore", 52852), "password", false);

        when(session.save(person)).thenReturn((Serializable) person);
        assertEquals(person, session.save(person));
    }
}
