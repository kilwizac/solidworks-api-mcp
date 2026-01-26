---
type: method
interface: IModelDocExtension
member: SetSceneBkgDIBx64
returns: void
parameters:
  -
    name: L_dib
    type: System.Int64
    description: Background image as DIBSECTION
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.GetSceneBkgDIB
  - IModelDoc2.InsertBkgImage
  - IModelDoc2.SceneBkgImageFileName
  - IModelDoc2.SetSceneBkgDIB
  - IModelDocExtension.GetSceneBkgDIBx64
keywords:
  - scene
  - background
  - image
  - device
  - independent
  - bitmap
  - dib
  - scenes
  - setscenebkgdibx64
  - imodeldocextension
  - model
  - doc
  - extension
  - bkg
  - di
  - bx64
  - int64
  - void
---

# IModelDocExtension.SetSceneBkgDIBx64

Sets the background image in 64-bit applications.

## Signature

```csharp
void SetSceneBkgDIBx64( 
   System.Int64
L_dib
)
```
## Parameters

- `L_dib` (System.Int64): Background image as DIBSECTION

## Return Value

Unknown.

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software
.
Old background images are deleted automatically.
For more information about DIBSECTION, see MicroSoft's documentation.

## See Also

- `IModelDoc2.GetSceneBkgDIB`
- `IModelDoc2.InsertBkgImage`
- `IModelDoc2.SceneBkgImageFileName`
- `IModelDoc2.SetSceneBkgDIB`
- `IModelDocExtension.GetSceneBkgDIBx64`