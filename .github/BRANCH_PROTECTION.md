# Branch Protection Configuration

## Overview
This repository has branch protection configured for the `main` branch to ensure code quality and security.

## Protection Rules Applied

### Pull Request Requirements
- ✅ Require pull request reviews before merging (1 approval minimum)
- ✅ Dismiss stale pull request approvals when new commits are pushed
- ✅ Require status checks to pass before merging
- ✅ Require branches to be up to date before merging

### Push & Delete Restrictions
- ✅ Enforce all above rules for administrators
- ✅ Prevent force pushes to the main branch
- ✅ Prevent deletion of the main branch
- ✅ Require linear history (prevents merge commits in certain scenarios)

## How to Use

### Creating a Pull Request
1. Create a feature branch from `main`
2. Make your changes
3. Push to your branch
4. Open a pull request
5. Wait for at least 1 approval from a maintainer
6. All status checks must pass
7. Merge when ready

### Running the Setup Script (if needed)
If you need to re-apply these protections, run:
```bash
chmod +x .github/workflows/branch-protection-setup.sh
./.github/workflows/branch-protection-setup.sh
```

**Requirements:**
- GitHub CLI (`gh`) installed
- Authenticated with GitHub (`gh auth login`)
- Admin access to the repository

## Overriding Protections

Only repository admins can:
- Merge pull requests without approvals (temporary override)
- Force push to protected branches
- Delete protected branches

Use these powers responsibly! 🔐

## Questions?
See GitHub's [Branch Protection Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule) documentation.
