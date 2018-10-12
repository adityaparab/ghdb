# Contributing to GHDB

We would love for you to contribute to GHDB and help make it even better than it is
today!

## <a name="issue"></a> Found a Bug?
If you find a bug in the source code, you can help us by
[submitting an issue](#submit-issue) to our [GitHub Repository][github]. Even better, you can
[submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub
Repository. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Before you submit an issue, please search the issue tracker, maybe an issue for your problem already exists and the discussion might inform you of workarounds readily available.

We want to fix all the issues as soon as possible, but before fixing a bug we need to reproduce and confirm it. In order to reproduce bugs we will systematically ask you to provide a minimal reproduction scenario using a repository or [Gist](https://gist.github.com/). Having a live, reproducible scenario gives us wealth of important information without going back & forth to you with additional questions like:

- version of GHDB used
- 3rd-party libraries and their versions
- and most importantly - a use-case that fails

Unfortunately, we are not able to investigate / fix bugs without a minimal reproduction, so if we don't hear back from you we are going to close an issue that don't have enough info to be reproduced.

You can file new issues by filling out our [new issue form](https://github.com/adityaparab/ghdb/issues/new).

### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

1. Search [GitHub](https://github.com/adityaparab/ghdb/pulls) for an open or closed PR
  that relates to your submission. You don't want to duplicate effort.
1. Fork the adityaparab/ghdb repo.
1. Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```
1. Commit your changes

     ```shell
     git commit -a
     ```
    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.
1. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

1. In GitHub, send a pull request to `ghdb:master`.
  * If we suggest changes then:
  * Make the required updates.
  * Re-run the Nest test suites to ensure tests are still passing.
  * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!
