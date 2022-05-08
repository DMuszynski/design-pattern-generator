package pl.dmuszynski.designpatterngenerator.model;

import lombok.Data;

@Data
public class DesignPattern {
    private String category;        // wzorce projektowe GoF
    private String classification;  // kreacyjny
    private String name;            // builder
}
