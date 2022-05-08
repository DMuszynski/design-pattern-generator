package pl.dmuszynski.designpatterngenerator.builder.creational.factorymethod;

public class FactoryMethodDirector {
    private final IFactoryMethod factoryMethod;

    public FactoryMethodDirector(IFactoryMethod factoryMethod) {
        this.factoryMethod = factoryMethod;
    }

    public void makeFactoryMethodPattern() {
        this.factoryMethod.buildProduct();
        this.factoryMethod.buildConcreteProducts();
        this.factoryMethod.buildCreator();
        this.factoryMethod.buildConcreteCreators();
    }
}
