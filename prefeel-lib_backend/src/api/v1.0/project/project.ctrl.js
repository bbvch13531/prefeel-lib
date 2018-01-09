import Directory from './../../../db/models/project';

// GET /api/v1.0/directory/:directory_name
export const getSelectedProject = (req, res) => {
  console.log(req.params);
  Directory.findOne({projectName: req.params.project_name}, (err, project) => {
    if (err) return res.status(500).json({error: err});
    if (!project) return res.status(404).json({error: 'project not found'});
    res.json(project);
  });
};