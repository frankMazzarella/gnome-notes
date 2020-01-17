const Lang = imports.lang;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const St = imports.gi.St;
const CurrentExtension = imports.misc.extensionUtils.getCurrentExtension();

const Storage = CurrentExtension.imports.Storage;

// TODO: if too many notes then popup will expand below bottom of screen, implement scroll
let panelEntry;
let notes;

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
  notes = Storage.getNotes();
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

    notes.forEach(note => {
      const popupMenuItem = new PopupMenu.PopupMenuItem(note);
      popupMenuItem.connect('activate', Lang.bind(this, () => log('ITEM CLICKED')));
      this.menu.addMenuItem(popupMenuItem);
    });
    // this.menu.removeAll() USE TO CLEAR POPUP MENU ITEMS
  }
});
