import fs from 'fs';
export class HtmlReport {
    print(report) {
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
//# sourceMappingURL=HtmlReport.js.map