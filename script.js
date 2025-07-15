function showForm(type) {
    document.getElementById('inwardForm').classList.add('hidden');
    document.getElementById('outwardForm').classList.add('hidden');
    document.getElementById('messageBox').textContent = '';
  
    if (type === 'inward') {
      document.getElementById('inwardForm').classList.remove('hidden');
    } else {
      document.getElementById('outwardForm').classList.remove('hidden');
    }
  }
  
  // Inward form
  document.getElementById('inwardForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const item = document.getElementById('inwardItem').value;
    const qty = document.getElementById('inwardQty').value;
    const supplier = document.getElementById('inwardSupplier').value;
  
    const msg = `✅ Inward: ${qty} units of "${item}" from ${supplier}`;
    document.getElementById('messageBox').textContent = msg;
    this.reset();
  });
  
  // Outward form
  document.getElementById('outwardForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const item = document.getElementById('outwardItem').value;
    const qty = document.getElementById('outwardQty').value;
    const issuedTo = document.getElementById('outwardTo').value;
  
    const msg = `🚚 Outward: ${qty} units of "${item}" issued to ${issuedTo}`;
    document.getElementById('messageBox').textContent = msg;
    this.reset();
  });
  