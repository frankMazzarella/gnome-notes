const Gio = imports.gi.Gio;
const ByteArray = imports.byteArray;

function getNotes() {
  // TODO: handle file does not exist
  const file = Gio.file_new_for_path('Desktop/notes.json');
  const content = file.load_contents(null)[1];
  try {
    return JSON.parse(ByteArray.toString(content));
  } catch (error) {
    return [];
  }
}
