import { MatchData } from './MatchData.js';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget,
    // buildAndPrintReport: MatchData,
  ) {}
}

// new Summary(new WinsAnalysis(), new ConsoleReport())
