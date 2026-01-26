---
type: method
interface: ITableAnnotation
member: SaveAsPDF
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Full path and filename of the PDF File (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - file-io
related:
  - ITableAnnotation.SaveAsTemplate
  - ITableAnnotation.SaveAsText
keywords:
  - table
  - pdf
  - saveaspdf
  - itableannotation
  - annotation
  - save
  - file
  - name
  - string
  - boolean
  - vb
  - net
  - vba
---

# ITableAnnotation.SaveAsPDF

Saves this table to a PDF file.

## Signature

```csharp
System.Boolean SaveAsPDF( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Full path and filename of the PDF File (see Remarks )

## Return Value

True if the table is saved to a PDF file, false if not

## Remarks

You must specify a filename. It should include the path, filename, and the PDF filename extension to which to save the table.
If a file of the specified name in the specified path...
Then it is...
Exists
Overwritten
Does not exist
Created

## Examples

- Save Table to PDF (C#) (Save_Table_Annotation_to_PDF_Example_CSharp.htm)
- Save Table to PDF (VB.NET) (Save_Table_Annotation_to_PDF_Example_VBNET.htm)
- Save Table to PDF (VBA) (Save_Table_Annotation_to_PDF_Example_VB.htm)

## See Also

- `ITableAnnotation.SaveAsTemplate`
- `ITableAnnotation.SaveAsText`