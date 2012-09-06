function makeStatusEditable() {
  $('#status').attr('contenteditable', true);
  $('#status').css({'border': '1px dotted #666'});
  $('#editButton').hide();
  $('#saveButton').show();
}

function saveStatus() {
  $('#status').attr('contenteditable', false);
  $('#status').css({'border': '0'});
  $('#saveButton').hide();
  $('#editButton').show();
  $('#statusDate').append(' (TODO: refresh)');
}