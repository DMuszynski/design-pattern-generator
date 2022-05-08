package pl.dmuszynski.designpatterngenerator.builder.creational.factorymethod;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class FactoryMethodProduct {
    private List<String> methods;
    private List<String> fields;
}
