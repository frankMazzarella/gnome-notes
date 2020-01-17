const Lang = imports.lang;
const GObject = imports.gi.GObject;
const St = imports.gi.St;
const PopupMenu = imports.ui.popupMenu;

var NoteItem = GObject.registerClass(
  class NoteItem extends PopupMenu.PopupBaseMenuItem {
    _init(label) {
      super._init();
      this.label = new St.Label({ text: label, x_expand: true });
      this.add_child(this.label);
      this.connect('activate', Lang.bind(this, () => log('test')));
      let hbox = new St.BoxLayout();
      let deleteIcon = new St.Icon({
        icon_name: 'window-close-symbolic',
        style_class: 'popup-menu-icon popup-menu-icon-extensions-settings '
      });
      let deleteButton = new St.Button({ child: deleteIcon });
      deleteButton.connect('clicked', Lang.bind(this, function () {
        log('delete clicked');
        this._getTopMenu().close()
      }));
      hbox.add_child(deleteButton);
      this.add_child(hbox);
    }
  }
);
