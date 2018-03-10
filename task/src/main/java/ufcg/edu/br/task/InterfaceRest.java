package ufcg.edu.br.task;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Melissa on 19/07/2017.
 */
@RestController
public class InterfaceRest {

    @RequestMapping(value="/teste", method= RequestMethod.GET)
    public String helloWord() {
        return "Oi, eu estou funcionando!";
    }


    @RequestMapping(value="/teste", method=RequestMethod.GET)
    public ObjTest testeRecuperar() {
        ObjetoTeste obj = new ObjetoTeste();
        obj.setNome("clemison");
        obj.setQuantidade(12382);
        return obj;
    }


}
