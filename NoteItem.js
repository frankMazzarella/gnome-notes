const Lang = imports.lang;
const GObject = imports.gi.GObject;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;

var NoteItem = GObject.registerClass(
  class NoteItem extends PopupMenu.PopupBaseMenuItem {
    _init(label) {
      super._init();
      this.label = new St.Label({ text: label, x_expand: true });
      this.label_actor = this.label;
      this.add_child(this.label);
      this.connect('activate', Lang.bind(this, () => log('test')));
    }
  }
);
