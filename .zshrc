# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/tutods/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="agnoster"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in ~/.oh-my-zsh/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
# DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in ~/.oh-my-zsh/plugins/*
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git docker osx laravel composer github node vscode npm)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"



#
# My Alias for ZSH and Oh-my-zsh
#

# General Alias #
alias zshrc='sudo subl ~/.zshrc' 
alias ..="cd .."
alias hosts="sudo subl /etc/hosts"
alias work="cd ~/Sites"
alias home="cd ~"

# Laravel Alias #
alias lstart="php artisan serve"
alias mig="php artisan migrate --seed"
alias migrfs="php artisan migrate:refresh --seed"
alias migfs="php artisan migrate:fresh --seed"
alias slink="php artisan storage:link"
alias lauth="php artisan make:auth"
alias lproj="composer create-project --prefer-dist laravel/laravel"
alias lkey="php artisan key:generate"
alias mmodel='php artisan make:model'
alias mcontr='php artisan make:controller'
alias mseeder='php artisan make:seeder'
alias mtest='php artisan make:test'
alias ccache='php artisan cache:clear'
alias cconfig='php artisan config:clear'
alias cview='php artisan view:clear'
alias croute='php artisan route:clear'
alias pa="php artisan"

# Composer Alias #
alias cpins="composer install"
alias cpupd="composer update"
alias cupg="composer upgrade"
alias cp="composer"

# NPM Alias #
alias ndev="npm run dev"
alias nins="npm install"
alias nsins="npm install --save"
alias nfix="npm audit fix"
alias nwatch="npm run watch"
alias nstart="npm start"
alias ncins="npm clean-install"

# Git Alias #
alias gpull="git pull"
alias gpush="git push"
alias gadd="git add ."
alias gst="git status"
alias gstash="git stash"
alias glog="git log"
alias gcall="git commit --all -m"
alias gcom="git commit -m"

# Brew Alias #
alias bcins="brew cask install"
alias bcunis="brew cask uninstall"
alias bclean="brew cleanup"
alias bupd="brew update"
alias bupg="brew upgrade"
alias bsearch="brew search"
alias bcrins="brew cask reinstall"
alias bins="brew install"

prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
