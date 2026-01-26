---
type: method
interface: ITableAnnotation
member: SaveAsText2
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of text data file (see Remarks )
  -
    name: Separator
    type: System.String
    description: Character or string to use to separate each of the text within each of the cells in the table in the text file (see Remarks )
  -
    name: IncludeHidden
    type: System.Boolean
    description: True to include text in hidden cells, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related:
  - ITableAnnotation.SaveAsPDF
  - ITableAnnotation.SaveAsTemplate
keywords:
  - table
  - save
  - text
  - saveastext2
  - itableannotation
  - annotation
  - text2
  - file
  - name
  - string
  - separator
  - include
  - hidden
  - boolean
---

# ITableAnnotation.SaveAsText2

Saves this table to a text data file.

## Signature

```csharp
System.Boolean SaveAsText2( 
   System.String
FileName
,
   System.String
Separator
,
   System.Boolean
IncludeHidden
)
```
## Parameters

- `FileName` (System.String): Full path and filename of text data file (see Remarks )
- `Separator` (System.String): Character or string to use to separate each of the text within each of the cells in the table in the text file (see Remarks )
- `IncludeHidden` (System.Boolean): True to include text in hidden cells, false to not

## Return Value

True if table is saved as a text file, false if not

## Remarks

FileName should include the path, filename, and filename extension to which to save the table as a text file.
If a file of the specified name in the specified path...
Then it is...
Exists
Overwritten
Does not exist
Created
Separator is typically a single character, but it can be a string. If Separator is empty, then the tab character is used.
NOTE
: Although you can save a table as a text file for use with other applications, like Microsoft Excel, you cannot currently import a text file to a table in SOLIDWORKS.

## See Also

- `ITableAnnotation.SaveAsPDF`
- `ITableAnnotation.SaveAsTemplate`