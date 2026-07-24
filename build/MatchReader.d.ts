import { MatchData } from './MatchData.js';
interface DataReader {
    read(): void;
    data: string[][];
}
export declare class MatchReader {
    reader: DataReader;
    static fromCsv(fileName: string): MatchReader;
    matches: MatchData[];
    constructor(reader: DataReader);
    load(): void;
}
export {};
//# sourceMappingURL=MatchReader.d.ts.map