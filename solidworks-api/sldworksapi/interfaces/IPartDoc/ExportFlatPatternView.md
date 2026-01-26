---
type: method
interface: IPartDoc
member: ExportFlatPatternView
returns: System.Boolean
parameters:
  -
    name: FilePath
    type: System.String
    description: Path and filename to which to save the sheet metal part in its flattened state to a DXF/DWG file
  -
    name: Options
    type: System.Int32
    description: Option as described in swExportFlatPatternViewOptions_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - file-io
  - parts
  - ui
related:
  - IPartDoc.ExportToDWG2
  - IPartDoc.IExportToDWG2
keywords:
  - exportflatpatternview
  - ipartdoc
  - part
  - doc
  - export
  - flat
  - pattern
  - view
  - file
  - path
  - string
  - options
  - int32
  - boolean
---

# IPartDoc.ExportFlatPatternView

Obsolete. Superseded by IPartDoc::ExportToDWG2.}}-->

## Signature

```csharp
System.Boolean ExportFlatPatternView( 
   System.String
FilePath
,
   System.Int32
Options
)
```
## Parameters

- `FilePath` (System.String): Path and filename to which to save the sheet metal part in its flattened state to a DXF/DWG file
- `Options` (System.Int32): Option as described in swExportFlatPatternViewOptions_e

## Return Value

True if the sheet metal part is enabled to be saved in its flattened state to a DXF/DWG file at the specified path and filename, false if not

## Remarks

Call this method before calling
IModelDocExtension::SaveAs
.

## See Also

- `IPartDoc.ExportToDWG2`
- `IPartDoc.IExportToDWG2`