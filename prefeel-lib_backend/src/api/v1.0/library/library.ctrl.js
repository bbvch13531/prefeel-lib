import Library from './../../../db/models/library';

// GET /api/v1.0/library
export const getLibraries = (req, res) => {
  let result = {};
  Library.find((err, libraries) => {
    if (err) return res.status(500).json({error: err});
    result.libraries = libraries;
    res.json(result);
  });
};

// GET /api/v1.0/library/:library-name
export const getSelectedLibrary = (req, res) => {
  Library.findOne({name: req.params.library_name}, (err, library) => {
    if (err) return res.status(500).json({error: err});
    if (!library) return res.status(404).json({error: 'library not found'});
    res.json(library);
  });
};
