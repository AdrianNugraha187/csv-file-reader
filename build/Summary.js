export class Summary {
    analyzer;
    outputTarget;
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
// new Summary(new WinsAnalysis(), new ConsoleReport())
//# sourceMappingURL=Summary.js.map