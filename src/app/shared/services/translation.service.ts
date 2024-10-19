import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
// inject translation service
  translateService = inject(TranslateService);

  setDefaultLanguage(lang: string): void {
    this.translateService.setDefaultLang(lang);
  }
}
