package pl.dmuszynski.designpatterngenerator.member;

import java.util.List;

public class MethodImpl extends Method {
    private String description;

    public MethodImpl(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type,
                      String name, List<MethodParam> params, String description) {
        super(modifier, trustedFinal, trustedStatic, type, name, params);
        this.description = description;
    }

    public MethodImpl(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name) {
        super(modifier, trustedFinal, trustedStatic, type, name);
    }

    public MethodImpl(ModifierType modifier, TypeName type, String name) {
        super(modifier, type, name);
    }

    @Override
    public String toString() {
        return super.toString() + " {\n\t" + description + "\n}";
    }
}
