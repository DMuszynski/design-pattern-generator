package pl.dmuszynski.designpatterngenerator.member;

public class MethodParam extends Member {

    public MethodParam(boolean trustedFinal, TypeName type, String name) {
        super(trustedFinal, type, name);
    }

    public MethodParam(TypeName type, String name) {
        super(type, name);
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
