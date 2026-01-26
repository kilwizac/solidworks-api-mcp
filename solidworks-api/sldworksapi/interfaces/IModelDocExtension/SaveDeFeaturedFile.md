---
type: method
interface: IModelDocExtension
member: SaveDeFeaturedFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name for the new, de-featured part
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - file-io
  - ui
related:
  - IModelDocExtension.SaveAs
keywords:
  - document
  - save
  - savedefeaturedfile
  - imodeldocextension
  - model
  - doc
  - extension
  - de
  - featured
  - file
  - name
  - string
  - boolean
  - vba
  - vb
  - net
---

# IModelDocExtension.SaveDeFeaturedFile

Removes all CAD data except the outer surface from a loaded part or assembly document and saves the outer surface as a part.

## Signature

```csharp
System.Boolean SaveDeFeaturedFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name for the new, de-featured part

## Return Value

True if method call is successful; false otherwise

## Examples

- Save as De-Featured File (VBA) (Save_As_Defeatured_File_Example_VB.htm)
- Save as De-Featured File (VB.NET) (Save_As_Defeatured_File_Example_VBNET.htm)
- Save as De-Featured File (C#) (Save_As_Defeatured_File_Example_CSharp.htm)

## See Also

- `IModelDocExtension.SaveAs`