const Settings = imports.ui.settings;
const SignalManager = imports.misc.signalManager;
const Main = imports.ui.main;
const Lang = imports.lang;

let currentWorkspace = 0;
let lastWorkspace = -1;

class GoToLastWorkspace {
    constructor(metaData) {
        this.meta = metaData;
        this.signalManager = new SignalManager.SignalManager(null);
    }

    enable() {
        this.settings = new Settings.ExtensionSettings(this, this.meta.uuid);
        this.signalManager.connect(this.settings, "changed::shortcut-key", () => this._updateHotkey());
        this._registerHotkey();

        this._wsSwitchId = global.workspace_manager.connect("workspace-switched",
            (display, prev, current) => {
                lastWorkspace = currentWorkspace;
                currentWorkspace = current;
            }
        );
    }

    disable() {
        this._removeHotkey();
        this.signalManager.disconnectAllSignals();

        if (this._wsSwitchId) {
            global.workspace_manager.disconnect(this._wsSwitchId);
            this._wsSwitchId = 0;
        }

        this.settings = null;
    }

    _registerHotkey() {
        let combo = this._getHotkeySequence("shortcut-key");
        if (combo) {
            Main.keybindingManager.addHotKey(
                "last-workspace-toggle",
                combo,
                Lang.bind(this, this._goToLastWorkspace)
            );
            this._combo = combo;
        }
    }

    _removeHotkey() {
        if (this._combo) {
            Main.keybindingManager.removeHotKey("last-workspace-toggle");
            this._combo = null;
        }
    }

    _updateHotkey() {
        this._removeHotkey();
        this._registerHotkey();
    }

    _getHotkeySequence(name) {
        let str = this.settings.getValue(name);
        if (str && str.length > 0 && str !== "::") {
            return str;
        }
        return null;
    }

    _goToLastWorkspace() {
        if (lastWorkspace < 0) {
            return;
        }
        let ws = global.workspace_manager.get_workspace_by_index(lastWorkspace);
        ws.activate(global.get_current_time());
    }
}

let extension = null;

function init(metadata) {
    if (!extension) {
        extension = new GoToLastWorkspace(metadata);
    }
}

function enable() {
    extension.enable();
}

function disable() {
    extension.disable();
    extension = null;
}
