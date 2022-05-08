package pl.dmuszynski.designpatterngenerator.member;

import java.util.List;

public class MethodDeclaration extends Method {

    public MethodDeclaration(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name, List<MethodParam> params) {
        super(modifier, trustedFinal, trustedStatic, type, name, params);
    }

    public MethodDeclaration(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name) {
        super(modifier, trustedFinal, trustedStatic, type, name);
    }

    public MethodDeclaration(ModifierType modifier, TypeName type, String name) {
        super(modifier, type, name);
    }

    @Override
    public String toString() {
        return super.toString() + ";";
    }
}
