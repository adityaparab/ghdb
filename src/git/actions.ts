import { Observable, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PerformClone } from './clone';
import { DoesGitRepoExists } from './repo-exists';
import { ValidateGit } from './validate';

class GithubDatabse {
  constructor() {
    console.log('Initializing Github Db');
  }

  public setup(): Observable<string> {
    return ValidateGit().pipe(
      map((message: string) => message),
      switchMap((message: string) => DoesGitRepoExists()),
      filter((doesIt: boolean) => !doesIt),
      switchMap(() => PerformClone())
    );
  }
}

export const githubDb = new GithubDatabse();
