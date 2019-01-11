package com.objectfrontier.training.ws.test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.Date;

import org.hibernate.Session;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.objectfrontier.training.ws.controller.PersonController;
import com.objectfrontier.training.ws.model.Address;
import com.objectfrontier.training.ws.model.Person;
import com.objectfrontier.training.ws.service.PersonService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath*:spring/root-context.xml", "classpath*:spring/appServlet/servlet-context.xml" })
public class MockitoControllerTest {

    private MockMvc mockMvc;
    boolean includeAddress;
    int id;

    @InjectMocks
    private PersonController pc ;

    @Mock
    private PersonService personService;

    @Mock
    private Session session;

    @Before
    public  void init() {

        pc = mock(PersonController.class);
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(PersonController.class)
                .build();
    }

    @Test
    public void testRead() throws Exception {
        try {
            Person expected = new Person(1, "updated fn", "kumar", "prgf@123", Date.valueOf("1996-02-21"), Date.valueOf("2018-11-27")
                    , new Address(2, "second avenue", "Chennai", 601245), "password", true);
            when(personService.read(includeAddress, id)).thenReturn(expected);
            mockMvc.perform(get("/person").param("includeAddress", "true").param("id", "1")).andExpect(status().isOk());
        verify(pc, times(1)).doGet(1, false);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
