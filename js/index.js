function makeStatusEditable() {
  $('#indexHeader #status').attr('contenteditable', true);
  $('#indexHeader #status').css({'border': '1px dotted #666'});
  $('#indexHeader #editButton').hide();
  $('#indexHeader #saveButton').show();
}

function saveStatus() {
  $('#indexHeader #status').attr('contenteditable', false);
  $('#indexHeader #status').css({'border': '0'});
  $('#indexHeader #saveButton').hide();
  $('#indexHeader #editButton').show();
  $('#indexHeader #statusDate').append(' (TODO: refresh)');
}