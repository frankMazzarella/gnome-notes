const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const ByteArray = imports.byteArray;

const FILE_PATH = 'Documents/notes.json';

function getNotes() {
  if(!GLib.file_test(FILE_PATH, GLib.FileTest.EXISTS)) GLib.file_set_contents(FILE_PATH, '[]\n');
  const file = Gio.file_new_for_path(FILE_PATH);
  const content = file.load_contents(null)[1];
  try {
    return JSON.parse(ByteArray.toString(content));
  } catch (error) {
    return [];
  }
}
