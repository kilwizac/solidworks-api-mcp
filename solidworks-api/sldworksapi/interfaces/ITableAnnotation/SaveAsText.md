---
type: method
interface: ITableAnnotation
member: SaveAsText
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of text data file (see Remarks )
  -
    name: Separator
    type: System.String
    description: Character or string to use to separate each of the text within each of the cells in the table in the text file
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
  - file-io
related:
  - ITableAnnotation.SaveAsPDF
  - ITableAnnotation.SaveAsTemplate
keywords:
  - saveastext
  - itableannotation
  - table
  - annotation
  - save
  - text
  - file
  - name
  - string
  - separator
  - boolean
---

# ITableAnnotation.SaveAsText

Obsolete. Superseded by ITableAnnotation::SaveAsText2.

## Signature

```csharp
System.Boolean SaveAsText( 
   System.String
FileName
,
   System.String
Separator
)
```
## Parameters

- `FileName` (System.String): Full path and filename of text data file (see Remarks )
- `Separator` (System.String): Character or string to use to separate each of the text within each of the cells in the table in the text file

## Return Value

True if table is saved as a text file, false if not

## Remarks

You must specify a filename. It should include the path, filename, and filename extension to which to save the table as a text file.
If a file of the specified name in the specified path...
Then it is...
Exists
Overwritten
Does not exist
Created
The Separator argument is typically a single character, but it can be a string. If Separator is empty, then the tab character is used.
NOTE
: Although you can save a table as a text file for use with other applications like Microsoft Excel, you cannot currently import a text file to a table in SOLIDWORKS.

## See Also

- `ITableAnnotation.SaveAsPDF`
- `ITableAnnotation.SaveAsTemplate`