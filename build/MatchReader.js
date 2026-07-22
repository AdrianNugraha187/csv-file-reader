import { dateStringToDate } from './Utils.js';
export class MatchReader {
    reader;
    matches = [];
    constructor(reader) {
        this.reader = reader;
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }
}
//# sourceMappingURL=MatchReader.js.map