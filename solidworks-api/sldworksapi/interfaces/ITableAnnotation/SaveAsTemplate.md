---
type: method
interface: ITableAnnotation
member: SaveAsTemplate
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename to which to save the table template file (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related:
  - ITableAnnotation.SaveAsPDF
  - ITableAnnotation.SaveAsText
keywords:
  - table
  - templates
  - tables
  - saveastemplate
  - itableannotation
  - annotation
  - save
  - template
  - file
  - name
  - string
  - boolean
---

# ITableAnnotation.SaveAsTemplate

Saves the format of this table as a template file, which you can then use to create other tables of the same type and that look the same.

## Signature

```csharp
System.Boolean SaveAsTemplate( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Full path and filename to which to save the table template file (see Remarks )

## Return Value

True if the table is saved as a template file, false if not

## Remarks

You must specify a filename. It should include the path, filename, and filename extension to which to save the table as a template file.
If a file of the specified name in the specified path...
Then it is...
Exists
Overwritten
Does not exist
Created
The filename extension of the file does not matter, but to be consistent with the SOLIDWORKS naming conventions, the following extensions should be used:
.
sldbomtbt
for BOM tables
.
sldrevtbt
for revision tables
.
sldholtbt
for hole tables
.
sldtbt
for general tables

## See Also

- `ITableAnnotation.SaveAsPDF`
- `ITableAnnotation.SaveAsText`