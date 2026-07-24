import { CsvFileReader } from './CsvFileReader.js';
import { MatchReader } from './MatchReader.js';
import { ConsoleReport } from './reportTargets/ConsoleReport.js';
import { WinsAnalysis } from './analyzers/WinsAnalysis.js';
import { Summary } from './Summary.js';

//membuat objek yang memenuhi 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// membuat instance dari MatchReader dan masukkan sesuatu yang memenuhi 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport(),
);

summary.buildAndPrintReport(matchReader.matches);
//matchReader.matches
