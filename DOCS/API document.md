## API document

prefeel-lib is welcome to receive PR.  
This is format of library example code.
```
{
  library:[
    "id": String,
    “directoryName”: String,
    "__v": int,
    “directory”: [
      “directoryName”: String,
      “directory”: [
      ]
      “file”: [
        {
          “fileName”: String,
          “content”: String
        }
      ]
    ],
    “file”: [
      {
        “fileName”: String,
        “content”: String
      }
    ]
  ]
}
```