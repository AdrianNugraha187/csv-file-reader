import { OutputTarget } from '../Summary.js';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <div>
          <h1>
          Analysis Output
          </h1>
          <div>
            ${report}
          </div>
        </div
        `;

    // const fileNameHtml = report.html;
    fs.writeFileSync('report.html', html);
  }
}
