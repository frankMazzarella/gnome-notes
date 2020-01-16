const Lang = imports.lang;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;

let panelEntry;

class Extension {
  enable() {
    panelEntry = new GnomeNotesEntry();
    Main.panel.addToStatusArea('GnomeNotesEntry', panelEntry);
  }

  disable() {
    panelEntry.destroy();
  }
}

function init() {
  return new Extension();
}

const GnomeNotesEntry = new Lang.Class({
  Extends: PanelMenu.Button,
  Name: 'GnomeNotesEntry',

  _init: function () {
    this.parent(0, 'GnomeNotesEntry');

    const icon = new St.Icon({
      icon_name: 'accessories-text-editor-symbolic',
      style_class: 'system-status-icon'
    });
    this.actor.add_child(icon);

    const testItem = new PopupMenu.PopupMenuItem('Test Item');
    const settingsMenuItem = new PopupMenu.PopupMenuItem('Settings');

    this.menu.addMenuItem(testItem);
    this.menu.addMenuItem(settingsMenuItem);

    testItem.connect('activate', Lang.bind(this, () => log('TEST CLICKED')));
    settingsMenuItem.connect('activate', Lang.bind(this, () => log('SETTINGS CLICKED')));
  }
});
