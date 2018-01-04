import Library from './../../../db/models/library';

// GET /api/v1.0/library
export const getLibraries = (req, res) => {
  Library.find((err, libraries) => {
    if (err) return res.status(500).send({error: 'database failure'});
    res.json(libraries);
  });
};

// GET /api/v1.0/library/:libraryName
/*
export const getSelectedLibrary = async (req, res) => {
  const library = await Library.findLibrary(req.params.name);
};
*/