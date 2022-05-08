package pl.dmuszynski.designpatterngenerator.builder.creational.factorymethod;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.dmuszynski.designpatterngenerator.member.Class;
import pl.dmuszynski.designpatterngenerator.member.Interface;

import java.util.List;

@Data
@NoArgsConstructor
public class FactoryMethodPattern {
    private Interface product;
    private Class creator;
    private List<Class> concreteProducts;
    private List<Class> concreteCreators;
}
