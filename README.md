# Themistocles
A starter desktop electron app.

## Electron JS
Electron is open source project from GitHub.
It merges node.js with Chromium (i.e. a browser with node.js installed).
It's used to create cross-platform desktop apps.

## Usage
Electron npm package installs electron binary.
Install it as a dev dependency. 
It's a dev only package dependency because it's not required for production.
Packaged electron apps will come bundled with the electron binary automatically.
Change the start script of npm package to: `"electron ."`
This tells electron executable to look for the main script in the current directory and run in dev mode.
Then you can run it with: `npm start`

## Platforms
There are only 3 possible platforms that Electron can run in: `win32`, `linux`, and `darwin` (macOS).
The runtime platform can be inspected with node's `process.platform`.
Electron application windows behave differently based on the platform.

## Processes
The entry point of the 'main' node.js process is found in the main property of the package.json
The main process is responsible for the app's lifecycle, I/O, and managing renderer processes.
Renderer processes are responsible for displaying graphical content (e.g. a web page).
They have access to the same JS APIs and tooling for typical front-end development (webpack, react, etc).

## Debugging
To debug in VS Code it needs to be attached to both the main and renderer processes of electron (see '.vscode/launch.json').
Select 'Main + renderer' in the Run and Debug window.

https://www.electronjs.org/docs/latest/tutorial/tutorial-preload