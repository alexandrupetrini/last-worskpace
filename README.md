# Go to Last Workspace

A Cinnamon extension that allows you to quickly jump back to the previously active workspace using a keyboard shortcut.

## Features

- Switch to the last used workspace with a single key press
- Configurable keyboard shortcut (default: `Super+W`)
- Lightweight and efficient
- Compatible with Cinnamon 5.4, 6.0, 6.2, 6.4, 6.6

## Installation

### Method 1: Manual Installation (Recommended)

1. **Install to Cinnamon extensions directory**

   ```bash
   # Create the extensions directory if it doesn't exist
   mkdir -p ~/.local/share/cinnamon/extensions/
   ```

2. **Download the extension**
   - Clone this repository or download the ZIP

   ```bash
   cd ~/.local/share/cinnamon/extensions/
   git clone https://github.com/alexandrupetrini/last-worskpace.git last-workspace@cbalx
   ```

3. **Restart Cinnamon**
   - Press `Alt+F2`, type `r`, and press `Enter`
   - Or log out and log back in

4. **Enable the extension**
   - Open **System Settings** → **Extensions**
   - Find "Go to Last Workspace" and toggle it **On**

## Configuration

1. Open **System Settings** → **Extensions**
2. Click the **⚙️** (gear) icon next to "Go to Last Workspace"
3. Change the **Keyboard shortcut** to your preference
   - Default: `<Super>w` (Windows/Super key + W)
   - Examples: `<Super>Tab`, `<Alt>Escape`, `<Control><Alt>Left`

## Usage

Once enabled and configured:

1. Switch between workspaces normally (using `Ctrl+Alt+Up/Down` or your preferred method)
2. Press your configured shortcut (default `Super+W`) to instantly jump back to the previous workspace
3. Press again to toggle between the two most recent workspaces

## How It Works

The extension tracks workspace switches and remembers the last workspace you were on. When you trigger the shortcut, it activates that workspace immediately.

## Uninstallation

1. Disable the extension in **System Settings** → **Extensions**
2. Remove the extension folder:
   ```bash
   rm -rf ~/.local/share/cinnamon/extensions/last-worskpace@cbalx
   ```
3. Restart Cinnamon (`Alt+F2` → `r` → `Enter`)

## Compatibility

| Cinnamon Version | Status       |
| ---------------- | ------------ |
| 5.4              | ✅ Supported |
| 6.0              | ✅ Supported |
| 6.2              | ✅ Supported |
| 6.4              | ✅ Supported |
| 6.6              | ✅ Supported |

## License

This project is open source. See the [GitHub repository](https://github.com/alexandrupetrini/last-worskpace) for details.

## Author

**cbalx** - [GitHub](https://github.com/alexandrupetrini)
