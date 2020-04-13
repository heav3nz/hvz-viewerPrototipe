import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
declare var Stimulsoft: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AppComponent implements OnInit {
  title = 'hvz-viewerPrototipe';
  viewer: any = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
  report: any = new Stimulsoft.Report.StiReport();

  constructor() {}

  ngOnInit() {
    console.log('Loading Viewer view');

    // this.http.get('reports/Report.mdc')
    // .subscribe((data: Response) => {

    //   console.log('Load report from url');
    //   this.report.loadDocument(data.json());
    //   this.viewer.report = this.report;

    //   console.log('Rendering the viewer to selected element');
    //   this.viewer.renderHtml('viewer');
    // });
    let data = {
     customers: [{
        CustomerID : 'LAMAI',
        CompanyName : 'La maison dAsie',
        ContactName : 'Annette Roulet',
        ContactTitle : 'Sales Manager',
        Address : '1 rue Alsace-Lorraine',
        City : 'Toulouse',
        Region : null,
        PostalCode : '31000',
        Country : 'France',
        Phone : '61.77.61.10',
        Fax : '61.77.61.11'
      }, {
        CustomerID : 'LAUGB',
        CompanyName : 'Laughing Bacchus Wine Cellars',
        ContactName : 'Yoshi Tannamuri',
        ContactTitle : 'Marketing Assistant',
        Address : '1900 Oak St.',
        City : 'Vancouver',
        Region : 'BC',
        PostalCode : 'V3F 2K1',
        Country : 'Canada',
        Phone : '(604) 555-3392',
        Fax : '(604) 555-7293'
      }]
    };

    this.viewer = new Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);
    this.report = new Stimulsoft.Report.StiReport();
    this.report.loadFile('/reports/SimpleList (2).mrt');
    this.report.dictionary.clear();
    var dataSet = new Stimulsoft.System.Data.DataSet('data');
    // Tendría que haber una promesa de los datos que vengan del Rest API
    // para poder consumir y mostrar los registros. Data es únicamente una prueba de su funcionamiento.
    dataSet.readJson(data);
    this.report.regData('data', 'data', dataSet);
    this.report.dictionary.synchronize();
    this.viewer.report = this.report;
    this.viewer.renderHtml('viewer');
  }


}
