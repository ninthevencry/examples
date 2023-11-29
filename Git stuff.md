Git stuff

git init - initializes a new repository

Git Workflow
A Git project can be thought of as having three parts:

A Working Directory: where you’ll be doing all the work: creating, editing, deleting and organizing files
A Staging Area: where you’ll list changes you make to the working directory
A Repository: where Git permanently stores those changes as different versions of the project

git status - checks status of changes

Untracked means that Git sees the file but has not started tracking changes yet.

git add [filename] [filename] [filename] - adds file to git staging area, essentially allows git to track this, can be used to add multiple files.
git add -A - adds all files

git diff [filename] - check the differences between the working directory and the staging area - you can use this without the filename

In order to update the changes use 'git add' again with the filenames

A commit is the last step in our Git workflow. A commit permanently stores changes from the staging area inside the repository.

A commit should have a message -m

git commit --amend --no-edit
--amend will update the last commit 
--no-edit avoids updating the commit message

Standard Conventions for Commit Messages:
-Must be in quotation marks
-Written in the present tense
-Should be brief (50 characters or less) when using -m

Commits are stored chronologically in the repository and can be viewed with: 

git log
git log --oneline --graph
git log -S "keyword"


In Git, the commit you are currently on is known as the HEAD commit. In many cases, the most recently made commit is the HEAD commit.

To see the HEAD commit, enter: git show HEAD

The output of this command will display everything the git log command displays for the HEAD commit, plus all the file changes that were committed.

git checkout HEAD [filename] - will undo the changes in the working directory with the committed file.

git reset HEAD [filename] - will remove the names file from the staging area and therefore it will not be included in commit.

git reset [commit_SHA] - commit_SHA being the first 7 chars of the GUID (which in this case is not but looks like one to me). Secure Hash Algorithm in this case. This will reset/rewind the commit back to the one selected.

git stash - Running the command above will store your work temporarily for later use in a hidden directory.
git stash pop - will retrieve the stash

if you have a set of commands that you use regularly and want to save some time from typing them, you can easily set up an alias for each command using Git config.

Below are a couple of examples:

$ git config --global alias.co "checkout"
$ git config --global alias.br "branch"
$ git config --global alias.glop "log --pretty=format:"%h %s" --graph"

Once the aliases are configured, next time you want to check out to another branch you could type the command:

$ git co example_branch

Instead of:

$ git checkout example_branch




