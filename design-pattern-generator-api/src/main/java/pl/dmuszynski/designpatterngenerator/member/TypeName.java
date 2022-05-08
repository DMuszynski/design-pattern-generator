package pl.dmuszynski.designpatterngenerator.member;

public enum TypeName {
    VOID (""),
    INT("int"),
    STRING("String"),
    FLOAT("float"),
    DOUBLE("double"),
    BOOLEAN("boolean"),
    OBJECT("object");

    private final String value;

    TypeName(final String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}
