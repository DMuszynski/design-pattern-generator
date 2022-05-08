package pl.dmuszynski.designpatterngenerator.member;

public enum ModifierType {
    PRIVATE("private"),
    PUBLIC("public"),
    PROTECTED("protected");

    private final String value;

    ModifierType(final String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}
