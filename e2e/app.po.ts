import { browser, element, by } from 'protractor';

export class SavePointPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('SP-root h1')).getText();
  }
}
