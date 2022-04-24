package pl.dmuszynski.designpatterngenerator.builder;

import lombok.*;

@Getter
@Setter
@EqualsAndHashCode
@AllArgsConstructor
public class Field {
    private String name;
    private String type;
    private String modifier;

    @Override
    public String toString() {
        return modifier + " " + type + " " + name + ";";
    }
}
