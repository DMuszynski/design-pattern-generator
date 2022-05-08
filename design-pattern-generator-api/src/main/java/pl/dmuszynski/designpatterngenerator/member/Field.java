package pl.dmuszynski.designpatterngenerator.member;

public class Field extends AccessibleMember {

    public Field(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name) {
        super(modifier, trustedFinal, trustedStatic, type, name);
    }

    public Field(ModifierType modifier, TypeName type, String name) {
        super(modifier, type, name);
    }

    @Override
    public String toString() {
        return super.toString() + ";";
    }
}
