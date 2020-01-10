import { browser, element, by, ExpectedConditions } from 'protractor';

export class CreateRecordForm {

  static waitToAppear() {
    return browser.wait(ExpectedConditions.visibilityOf(element(by.tagName('app-create-record-form'))), 5000);
  }

}
