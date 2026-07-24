import { MatchResult } from '../MatchResult.js';
export class WinsAnalysis {
    team;
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins}`;
    }
}
//# sourceMappingURL=WinsAnalysis.js.map