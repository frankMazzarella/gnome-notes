const Lang = imports.lang;
const PanelMenu = imports.ui.panelMenu;
const St = imports.gi.St;
const CurrentExtension = imports.misc.extensionUtils.getCurrentExtension();

const Storage = CurrentExtension.imports.Storage;
const NoteItem = CurrentExtension.imports.NoteItem.NoteItem;

var handle = new Lang.Class({
  Extends: PanelMenu.Button,
  Name: 'GnomeNotesEntry', // TODO: this is in 2 files, refactor into a global constants file
  _init: function () {
    this.parent(0, 'GnomeNotesEntry');
    const icon = new St.Icon({ icon_name: 'accessories-text-editor-symbolic', style_class: 'system-status-icon' });
    this.actor.add_child(icon);
    const notes = Storage.getNotes();
    notes.forEach(note => this.menu.addMenuItem(new NoteItem(note)));
    // TODO: this.menu.removeAll() USE TO CLEAR POPUP MENU ITEMS
  }
});
