

// Toggle between each type of legal entity (business or individual) in the signup form
document.body.addEventListener('change', function(e) {
  if (e.target.name !== 'kind') {
    return;
  }

  // Show any fields that apply to the new owner type
  var ownerInfoRows = document.querySelectorAll('.owner-info');
  ownerInfoRows.forEach(function(row) {
    row.classList.toggle('hidden', !row.classList.contains(e.target.value));
  });
});

