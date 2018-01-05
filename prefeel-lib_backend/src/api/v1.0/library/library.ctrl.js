import Library from './../../../db/models/library';

// GET /api/v1.0/library
export const getLibraries = (req, res) => {
  Library.find((err, libraries) => {
    if (err) return res.status(500).json({error: err});
    res.json(libraries);
  });
};

// GET /api/v1.0/library/:library_name
export const getSelectedLibrary = (req, res) => {
  console.log(req.params);
  Library.findOne({name: req.params.library_name}, (err, library) => {
    if (err) return res.status(500).json({error: err});
    if (!library) return res.status(404).json({error: 'library not found'});
    res.json(library);
  });
};