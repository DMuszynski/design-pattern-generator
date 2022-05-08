package pl.dmuszynski.designpatterngenerator.member;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class Class {
    private String name;
    private List<MethodImpl> methods;
    private List<Field> fields;
    private boolean trustedFinal;

    private String getConstructor() {
        final List<Field> tmpFields = this.fields;
        final List<String> paramFields = tmpFields
                .stream()
                .map(field -> new MethodParam(field.trustedFinal, field.type, field.name).toString())
                .collect(Collectors.toList());
        final List<String> fieldsNames = tmpFields
                .stream()
                .map(field -> field.name)
                .collect(Collectors.toList());

        return "public " + name + "(" + String.join(", ", paramFields) + ") {\n\t"
                + fieldsNames
                .stream()
                .map(field -> "\tthis." + field + "=" + field + ";")
                .collect(Collectors.joining("\n\t")) +
                "\n\t}";
    }

    @Override
    public String toString() {
        return "public " + (trustedFinal ? "final " : "") + "class " + name + "{\n\t"
                + fields.stream().map(Field::toString).collect(Collectors.joining("\n\t")) + "\n\n\t"
                + getConstructor() + "\n\n\t"
                + methods.stream().map(method -> method.toString() + "")
                .collect(Collectors.joining("\n\t")) + "\n}";
    }
}
