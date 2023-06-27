# Highlights 🥇 

<img src="https://media1.giphy.com/media/81xwEHX23zhvy/giphy.gif"/>


## What I Have Done: 
✅ Install CanCanCan in your project.
✅ Add a role column to the users table. Remember to use a migration for this.
✅ A user can delete a post if it is theirs or if they have an admin role (column role has value "admin"). Use CanCanCan for this authorization.
      - For that you need to implement the post deleting functionality. Add the "Delete" button to the view and make sure that only authorized users can see it.
      
✅ A user can delete a comment if it is theirs or if they have an admin role (column role has value "admin"). Use CanCanCan for this authorization.
      - For that you need to implement the comment deleting functionality. Add the "Delete" button to the view and make sure that only authorized users can see it.

### Tests : 
✅ User index page
✅ user show page
✅ User post index page
✅ Post show page

# Local Installation 

```
bundle install &&  EDITOR="code --wait" rails credentials:edit 
```

### put your db user and pass as env variable

```
POSTGRESQL_USER: username
POSTGRESQL_PASSWORD: password
RAILSBLOG_DATABASE_PASSWORD: password
```

## 👥 Authors

- Ahmed Hassan Rony @roniy68 
- Muhammad Aleem @MAleemH 

## Missed anything?
- [ ] Explained the purpose of this PR.
- [ ] Self reviewed the PR.
- [ ] Added or updated test cases.
- [ ] Informed of breaking changes, testing and migrations (if applicable).
- [ ] Updated documentation (if applicable).
- [ ] Attached screenshots (if applicable).

## Followed Rules: 
- Made sure [no linter errors](https://github.com/microverseinc/linters-config)
-  Followed [Github Flow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/github_flow.md)
-  Documented [professionaly](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md)
- Follow our list of [best practices for Ruby](https://github.com/microverseinc/curriculum-ruby/blob/main/articles/ruby_best_practices.md).

