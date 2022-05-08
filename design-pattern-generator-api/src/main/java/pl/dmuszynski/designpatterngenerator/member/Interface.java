package pl.dmuszynski.designpatterngenerator.member;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class Interface {
    private String name;
    private List<MethodDeclaration> methods;

    @Override
    public String toString() {
        return "public interface " + name + " {\n\t" + methods
                .stream()
                .map(MethodDeclaration::toString)
                .collect(Collectors.joining("\n\t")) + "\n}";
    }
}
