import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ShowsService } from 'src/app/core/services/shows/shows.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn!: any;
  isAdmin!: any;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    public readonly translate: TranslateService,
    private readonly showService: ShowsService) {

    translate.addLangs(['en', 'hn']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang!.match(/en|hn/) ? browserLang! : 'en');

    this.authService.isLoggedIn().subscribe(next => {
      this.isLoggedIn = next;
    });

    this.authService.isLoggedInAsAdmin().subscribe(next => {
      this.isAdmin = next;
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('/auth/login');
  }

  logout(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/');
  }

  changeLang(language: string): void {
    this.translate.use(language);
  }

  searchTextHandler(searchText: string): void {
    this.showService.searchShowDetailsByName(searchText);
  }

  renderShowByCategory(showCategory: any): void {
    this.showService.searchShowDetailsByCategory(showCategory.language, showCategory.category);
  }

}
