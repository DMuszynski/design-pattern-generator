package pl.dmuszynski.designpatterngenerator.builder.creational.factorymethod;

public class FactoryMethodBuilder implements IFactoryMethod {

    private FactoryMethodPattern factoryBuilderPattern;

    @Override
    public void buildProduct() {
//        factoryBuilderPattern.setProduct();
    }

    @Override
    public void buildConcreteProducts() {

    }

    @Override
    public void buildCreator() {

    }

    @Override
    public void buildConcreteCreators() {

    }

    public FactoryMethodPattern getResult() {
        return this.factoryBuilderPattern;
    }
}
