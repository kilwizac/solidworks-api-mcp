---
type: method
interface: ISheet
member: SaveFormat
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name to which to save the sheet format (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - file-io
related:
  - IDrawingDoc.EditTemplate
  - ISheet.ReloadTemplate
keywords:
  - sheet
  - see
  - also
  - isheet
  - format
  - saveformat
  - save
  - file
  - name
  - string
  - boolean
  - modify
  - reload
  - template
  - vb
  - net
  - vba
---

# ISheet.SaveFormat

Saves the sheet format in the specified file.

## Signature

```csharp
System.Boolean SaveFormat( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name to which to save the sheet format (see Remarks )

## Return Value

True if the sheet format is saved to the specified file, false if not

## Remarks

You must specify the path, file name, and filename extension to which to save the sheet format. Use .
slddrt
for the filename extension.
Before calling this method, use
IDrawingDoc::ActivateSheet
to make the sheet active.

## Examples

- Modify and Reload Sheet Format Template (C#) (Modify_and_Reload_Sheet_Format_Template_Example_CSharp.htm)
- Modify and Reload Sheet Format Template (VB.NET) (Modify_and_Reload_Sheet_Format_Template_Example_VBNET.htm)
- Modify and Reload Sheet Format Template (VBA) (Modify_and_Reload_Sheet_Format_Template_Example_VB.htm)

## See Also

- `IDrawingDoc.EditTemplate`
- `ISheet.ReloadTemplate`