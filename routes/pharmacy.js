exports.view = (req, res) => {
  res.render('pharmacy', {
    title: 'Pharmacy'
  });
};

exports.viewPharmacyDetails = (req, res) => {
  const id = req.params.id;
  res.render('pharmacy', {
    title: 'Pharmacy Details',
    pharmacyID: id
  });
};
