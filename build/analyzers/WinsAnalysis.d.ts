import { MatchData } from '../MatchData.js';
import { Analyzer } from '../Summary.js';
export declare class WinsAnalysis implements Analyzer {
    team: string;
    constructor(team: string);
    run(matches: MatchData[]): string;
}
//# sourceMappingURL=WinsAnalysis.d.ts.map