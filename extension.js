const Main = imports.ui.main;
const CurrentExtension = imports.misc.extensionUtils.getCurrentExtension();

const GnomeNotesEntry = CurrentExtension.imports.GnomeNotesEntry.handle;

// TODO: if too many notes then popup will expand below bottom of screen, implement scroll
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
