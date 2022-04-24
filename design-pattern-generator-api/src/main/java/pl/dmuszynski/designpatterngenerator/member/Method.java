package pl.dmuszynski.designpatterngenerator.member;

import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class Method extends AccessibleMember {
    private List<MethodParam> params;
    private String description;

    public Method(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name,
                  List<MethodParam> params, String description) {
        super(modifier, trustedFinal, trustedStatic, type, name);
        this.params = params;
        this.description = description;
    }

    public Method(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name) {
        super(modifier, trustedFinal, trustedStatic, type, name);
    }

    public Method(ModifierType modifier, TypeName type, String name) {
        super(modifier, type, name);
    }

    @Override
    public String toString() {
        return super.toString() + "(" + params
                .stream()
                .map(MethodParam::toString)
                .collect(Collectors.joining(", ")) + ") " +
                "{\n" + description + "\n}";
    }
}
