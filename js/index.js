$(document).ready(function() {
  $('#networkUpdatesScroller, #jobUpdatesScroller').scrollz({
    pull: true
  });

  $('#networkUpdatesScroller').bind('pulled', function () {
    // Process pull action here
    alert('fetching network updates..');

    // Hide pull header when done
    $('#networkUpdatesScroller').scrollz('hidePullHeader');
  });

  $('#jobUpdatesScroller').bind('pulled', function () {
    // Process pull action here
    alert('fetching job updates..');

    // Hide pull header when done
    $('#jobUpdatesScroller').scrollz('hidePullHeader');
  });
});

function makeStatusEditable() {
  $('#indexHeader #status').attr('contenteditable', true);
  $('#indexHeader #status').css({'border':'1px dotted #666'});
  $('#indexHeader #editButton').hide();
  $('#indexHeader #saveButton').show();
}

function saveStatus() {
  $('#indexHeader #status').attr('contenteditable', false);
  $('#indexHeader #status').css({'border':'0'});
  $('#indexHeader #saveButton').hide();
  $('#indexHeader #editButton').show();
  $('#indexHeader #statusDate').append(' (TODO: refresh)');
}