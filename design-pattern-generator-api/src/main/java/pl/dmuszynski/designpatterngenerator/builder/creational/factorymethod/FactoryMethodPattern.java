package pl.dmuszynski.designpatterngenerator.builder.creational.factorymethod;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class FactoryBuilderPattern {
    private String product;
    private String creator;
    private List<String> concreteProducts;
    private List<String> concreteCreators;
}
