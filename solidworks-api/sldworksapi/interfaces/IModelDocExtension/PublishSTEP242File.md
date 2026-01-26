---
type: method
interface: IModelDocExtension
member: PublishSTEP242File
returns: System.Int32
parameters:
  -
    name: Path
    type: System.String
    description: Full qualified path to which to export the SOLIDWORKS MBD 3D part or assembly; use .STP for the file name extension
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IMBD3DPdfData.CreateAttachSTEP242
  - IModelDocExtension.PublishTo3DPDF
keywords:
  - publishstep242file
  - imodeldocextension
  - model
  - doc
  - extension
  - publish
  - step242
  - file
  - path
  - string
  - int32
---

# IModelDocExtension.PublishSTEP242File

Obsolete. Superseded by IModelDocExtension::PublishSTEP242File2.

## Signature

```csharp
System.Int32 PublishSTEP242File( 
   System.String
Path
)
```
## Parameters

- `Path` (System.String): Full qualified path to which to export the SOLIDWORKS MBD 3D part or assembly; use .STP for the file name extension

## Return Value

Status as defined in swStep242Error_e

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)

## See Also

- `IMBD3DPdfData.CreateAttachSTEP242`
- `IModelDocExtension.PublishTo3DPDF`