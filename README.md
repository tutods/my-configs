# My Configs
In this repository you can find my configs for:
- [Hyper Terminal](https://hyper.is/)
- [Oh-my-zsh](https://ohmyz.sh/)

![Hyper Terminal](https://i.ibb.co/FndX03L/image.png)

# Oh-my-zsh

![Spaceship and Powerlevel10k](https://i.ibb.co/qRJBcfg/Screenshot-at-May-21-08-57-11.png)

> Spaceship **vs** Powerlevel10K

## Spaceship
1. Clone: `git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"`
1. Link: `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`
1. Set theme: `ZSH_THEME="spaceship"`

### Options
```
SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  vi_mode       # Vi-mode indicator
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

## Powerlevel10K
1. Install: `git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k`
1. Set theme on `.zshrc` file: `ZSH_THEME="powerlevel10k/powerlevel10k"`
1. Set your preferences on wizard when open terminal

> **See** `.zshrc.powerlevel`file

## Zinit
1. Install: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"`
1. Add code in `.zshrc` after `### End of ZInit's installer chunk`:
```
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```
> Already added on my `.zshrc` config
