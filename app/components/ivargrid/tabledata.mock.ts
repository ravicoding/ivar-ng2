

export class COL {
  id : string;
  type : string;
}
var cols:COL[] = [
  { id :"id1",type:"data"},
  { id :"id2",type:"link"},
  { id :"id3",type:"data"}];
var rows = [
  ["datac11", "datac12", "datac13"],
  ["datac21", "datac22", "datac23"],
  ["datac31", "datac32", "datac33"],
  ["datac41", "datac42", "datac43"],
  ["datac51", "datac52", "datac53"],
  ["datac61", "datac32", "datac33"],
  ["datac71", "datac42", "datac43"],
  ["datac81", "datac22", "datac23"],
  ["datac91", "datac32", "datac33"],
  ["datac10", "datac42", "datac43"],
  ["datac11", "datac32", "datac33"],
  ["datac12", "datac42", "datac43"]
];
exports.MockData = {
  cols: cols,
  rows: rows
};
