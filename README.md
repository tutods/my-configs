# My Configs

In this repository you can find my configs for:

-   [Hyper Terminal](https://hyper.is/)
-   [Oh-my-zsh](https://ohmyz.sh/)

This configs help me to improve my workflow on terminal, using some alias (on **\*oh-my-zsh**)and run some commands again (**ZSH AutoSuggestions**).

If this repo is useful for you give a star!

# Oh-my-zsh

## 🎨 Theme

### Spaceship

🔗 **Repo:** [URL](https://github.com/denysdovhan/spaceship-prompt)

📁 **File:** `.zshrc`

#### 📖 **How To Use:**

-   Clone: `git clone https://github.com/denysdovhan/spaceship-prompt.git "$ZSH_CUSTOM/themes/spaceship-prompt"`
-   Link: `ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"`
-   Set theme: `ZSH_THEME="spaceship"`

#### Custom Options

You can customize some things on this theme, for that see this [link](https://github.com/denysdovhan/spaceship-prompt/blob/master/docs/Options.md)

## Custom Plugins

In my **`.zshrc`** file, I have 3 custom plugins, and to install follow the steps on plugins repository:

-   **[Fast Syntax Highlighting by _zdharma_](https://github.com/zdharma/fast-syntax-highlighting)**
-   **[ZSH Autosuggestions by _zsh-users_](https://github.com/zsh-users/zsh-autosuggestions)**
-   **[ZSH Completions by _zsh-users_](https://github.com/zsh-users/zsh-completions)**
-   **[OMZ Homebrew](https://github.com/digitalraven/omz-homebrew)**

# Hyper

📁 **File:** `.hyper.js`

![Hyper Terminal](https://i.ibb.co/FndX03L/image.png)

## Window Buttons like macOS

In **Linux** you can use [this plugin](https://github.com/krve/hyper-mac-controls) to put window controls like macOS.

Only need add in `plugins` array the value `'hyper-mac-controls'`

## How to Remove `%` symbol when start

-   Add on `.zhsrc` file this line:

```bash
### Remove % Symbol on Hyper
unsetopt PROMPT_SP
```

> Already added on my `.zshrc` config

## ➕ Plugins

-   `hyper-mac-controls`
-   `hyper-custom-controls`
-   `hyper-tabs-enhanced`
-   `hypercwd`
-   `hyper-search`
-   `hyper-statusline`

## 🎨 Theme

💬 **Name:** Dracula <small>(I have used this theme ok)</small>

🔗 **Repo:** [URL](https://github.com/dracula/hyper)

### 📖 How to install?

Run on your terminal this command:

```bash
hyper install hyper-dracula
```

But, if you copy my config not need install, only copy and paste on your `.hyper.js` file

### 📖 How to use?

After install you only need add on `plugins: []` a new entry:

```javascript
plugins: ['hyper-dracula'],
```
