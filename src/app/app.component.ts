import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-playground';

  cnLanguages = {
    app: {
      lang: {
        cn: '中文',
        en: '英文',
        'switch-label': '选择语言：'
      },
      title: 'ng8 演练场'
    },
    heroes: {
      title: '{{name}} 详情'
    }
  };

  enLanguages = {
    app: {
      lang: {
        cn: 'Chinese',
        en: 'English',
        'switch-label': 'select language: '
      },
      title: 'ng8 playground'
    },
    heroes: {
      title: '{{name}} Details'
    }
  };

  constructor(private translate: TranslateService) {
    translate.addLangs(['en-US', 'zh-Hans']);
    translate.setTranslation('zh-Hans', this.cnLanguages);
    translate.setTranslation('en-US', this.enLanguages);
    translate.setDefaultLang('zh-Hans');
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
