import { log } from 'console';
// import { MatchReader } from './inheritance/MatchReader.js';
import { CsvFileReader } from './CsvFileReader.js';
import { MatchResult } from './MatchResult.js';
import { MatchReader } from './MatchReader.js';
//membuat objek yang memenuhi 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');
// membuat instance dari MatchReader dan masukkan sesuatu yang memenuhi 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
let manUnitedWins = 0;
for (const match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
log(`Man United won ${manUnitedWins} games`);
//# sourceMappingURL=index.js.map