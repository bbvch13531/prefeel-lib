import React from 'react';
import styles from './DirectoryBar.scss';

const DirectoryBar = ({isOpen}) => {
  const directoryBarClassName = isOpen ? 'directory-bar open' : 'directory-bar';
  /*
  const example = {
    "folderName": "react_tutorial-master",
    "file": [
            {
                    "fileName": "README.md",
                    "content": "text"
            },
            {
                    "fileName": "package-lock.json",
                    "content": "text"
            },
            {
                    "fileName": "package.json",
                    "content": "text"
            }
    ],
    "folder": [
            {
                    "folderName": "public",
                    "file": [
                            {
                                    "fileName": "index.html",
                                    "content": "text"
                            },
                            {
                                    "fileName": "manifest.json",
                                    "content": "text"
                            }
                    ],
                    "folder": []
            },
            {
                    "folderName": "react_tutorial",
                    "file": [],
                    "folder": []
            },
            {
                    "folderName": "src",
                    "file": [
                            {
                                    "fileName": "index.css",
                                    "content": "text"
                            },
                            {
                                    "fileName": "index.js",
                                    "content": "text"
                            }
                    ],
                    "folder": []
            }
    ]
  };

  makeTree = () => {
    const tree = example;
  }
  */

  return (
    <div className={directoryBarClassName}>
      <div className="project-name">
        directoryBar
      </div>
    </div>
  );
}

export default DirectoryBar;