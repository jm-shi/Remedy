/*
 * pharmacy.js
 * Renders the pharmacy details page.
 */

exports.viewPharmacyDetails = (req, res) => {
  const id = req.params.id;
  res.render('pharmacy', {
    title: 'Pharmacy Details',
    pharmacyID: id
  });
};
