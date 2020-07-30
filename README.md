# My Configs
In this repository you can find my configs for:
- [Hyper Terminal](https://hyper.is/)
- [Oh-my-zsh](https://ohmyz.sh/)

This configs help me to improve my workflow on terminal, using some 


# Oh-my-zsh

![Spaceship and Powerlevel10k](https://i.ibb.co/qRJBcfg/Screenshot-at-May-21-08-57-11.png)

> Spaceship **vs** Powerlevel10K

## Spaceship
🔗 **Repo:** [URL](https://github.com/denysdovhan/spaceship-prompt)
📁 **File:** `.zshrc`

### 📖 **How To Use:**
1. Clone:
  - `git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"`
1. Link:
  - `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`
1. Set theme:
  - `ZSH_THEME="spaceship"`

### Custom Options
You can customize some things on this theme, for that see this [link](https://github.com/denysdovhan/spaceship-prompt/blob/master/docs/Options.md)


## Powerlevel10K
🔗 **Repo:** [URL](https://github.com/romkatv/powerlevel10k/)
📁 **File:** `.zshrc.powerlevel`

### 📖 **How To Use:**
1. Install
   - `git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k`
1. Set theme on `.zshrc` file: 
   - `ZSH_THEME="powerlevel10k/powerlevel10k"`
1. Set your preferences on wizard when open terminal


## Zinit

**Zinit** is a **Zsh** plugin manager, you can use to install plugins, themes, etc. In my case I use to install some **zsh plugins** like:
- (Fast Syntax Highlighting by *zdharma*)[https://github.com/zdharma/fast-syntax-highlighting]
- (ZSH Autosuggestions by *zsh-users*)[https://github.com/zsh-users/zsh-autosuggestions]
- (ZSH Completions by *zsh-users*)[https://github.com/zsh-users/zsh-completions]

### 📖 **How To Use:**

1. Install: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh)"`
1. Add code in `.zshrc` after `### End of ZInit's installer chunk`:

```
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```
> Already added on my `.zshrc` config

# Hyper

![Hyper Terminal](https://i.ibb.co/FndX03L/image.png)

## 🎨 Theme Used

- **Name:** Omni (by Rockseat)
- **Link:** https://github.com/getomni/hyper-omni

To install please see tutorial on **Omni** repository.

### 📖 How to use?

Add on `localPlugins: []` entry `'hyper-omni`:

```javascript
localPlugins: ['hyper-omni'],
```
