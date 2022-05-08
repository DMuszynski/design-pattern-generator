package pl.dmuszynski.designpatterngenerator.member;

import lombok.Getter;
import lombok.EqualsAndHashCode;
import lombok.AllArgsConstructor;

@Getter
@EqualsAndHashCode
@AllArgsConstructor
public abstract class Member {
    protected boolean trustedFinal;
    protected TypeName type;
    protected String name;

    public Member(TypeName type, String name) {
        this(false, type, name);
    }

    @Override
    public String toString() {
        return (trustedFinal ? "final " : "") + type + " " + name;
    }
}
