/*
 * doctor.js
 * Renders the contact doctor page and doctor details page.
 */

exports.viewContactDoctor = (req, res) => {
  res.render('contact-doctor', {
    title: 'Contact Doctor'
  });
};

exports.viewDoctorDetails = (req, res) => {
  const id = req.params.id;
  res.render('doctor', {
    title: 'Doctor Details',
    doctorID: id
  });
};
