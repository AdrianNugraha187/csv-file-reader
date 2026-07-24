import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { HtmlReport } from './reportTargets/HtmlReport.js';
export class Summary {
    analyzer;
    outputTarget;
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis(team), new HtmlReport());
    }
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