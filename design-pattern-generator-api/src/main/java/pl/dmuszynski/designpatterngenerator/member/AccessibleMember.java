package pl.dmuszynski.designpatterngenerator.member;

import lombok.Getter;

@Getter
public abstract class AccessibleMember extends Member {
    protected ModifierType modifier;
    protected boolean trustedStatic;

    public AccessibleMember(ModifierType modifier, boolean trustedFinal, boolean trustedStatic, TypeName type, String name) {
        super(trustedFinal, type, name);
        this.modifier = modifier;
        this.trustedStatic = trustedStatic;
    }

    public AccessibleMember(ModifierType modifier, TypeName type, String name) {
        this(modifier, false, false, type, name);
    }

    @Override
    public String toString() {
        return modifier + " " + (trustedStatic ? "static " : "") + super.toString();
    }
}
