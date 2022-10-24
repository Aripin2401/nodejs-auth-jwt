exports.allAccess = (req, res) => {
    res.status(200).send("Public Konten.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Konten.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Konten.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Konten.");
  };