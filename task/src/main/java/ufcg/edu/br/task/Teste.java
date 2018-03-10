package ufcg.edu.br.task;

/**
 * Created by Melissa on 19/07/2017.
 */
@RestController
@RequestMapping(value = "/usuario")
public class Test {

    @RequestMapping(value = "/consulta/{nome}", method = RequestMethod.GET)
    public String consultarUsuario(@PathVariable String nome) {
        return nome;
    }
}