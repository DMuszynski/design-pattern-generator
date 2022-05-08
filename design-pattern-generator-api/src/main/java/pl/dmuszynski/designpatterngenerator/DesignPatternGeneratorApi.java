package pl.dmuszynski.designpatterngenerator;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import pl.dmuszynski.designpatterngenerator.member.*;
import pl.dmuszynski.designpatterngenerator.member.Class;

import java.util.List;

@SpringBootApplication
public class DesignPatternGeneratorApi {
    public static void main(String[] args) {
        MethodParam param = new MethodParam(TypeName.STRING, "name");

        Field field = new Field(ModifierType.PRIVATE, TypeName.STRING, "name");
        MethodImpl method = new MethodImpl(ModifierType.PRIVATE, false, true, TypeName.STRING, "name",
                List.of(param, param), "dasda");
        MethodDeclaration method1 = new MethodDeclaration(ModifierType.PUBLIC, false, false, TypeName.STRING, "name",
                List.of(param, param));
        Interface inter = new Interface("IFasada", List.of(method1, method1));
        Class cla = new Class("IFasada", List.of(method, method), List.of(field, field), true);

        System.out.println("POLE: " + field);
        System.out.println("METHOD: " + method);
        System.out.println("INTERFEJS: " + inter);
        System.out.println("KLASA: " + cla);

        //SpringApplication.run(DesignPatternGeneratorApi.class, args);
    }
}
