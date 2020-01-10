import { browser } from 'protractor';

import { AppPage } from './app.po';
import { CreateRecordForm } from './components/createRecordForm';
import { Submit } from './components/submit';


describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the correct title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('Client');
  });

  it('should display header', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BDTS');
  });

  describe('Submit', () => {
    it('should show the create record form by default', () => {
      return page.navigateTo()
        .then(() => {
          return CreateRecordForm.waitToAppear();
        });
    });


    it('should show the create record form when clicked on', () => {
      return Submit.changeToForm('Change Record Owner')
      .then(() => {
        return Submit.changeToForm('Create Record')
          .then(() => {
            return CreateRecordForm.waitToAppear()
            .then(() => {
              return Submit.changeToForm('Create Record')
              .then(() => {
                return CreateRecordForm.waitToAppear();
              });
            });
          });
      });
    });
  });
});
