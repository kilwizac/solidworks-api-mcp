---
type: method
interface: IModelDocExtension
member: GetSceneBkgDIBx64
returns: System.Int64
parameters: []
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
  - IModelDocExtension.SetSceneBkgDIBx64
keywords:
  - background
  - image
  - scene
  - device
  - independent
  - bitmap
  - dib
  - scenes
  - getscenebkgdibx64
  - imodeldocextension
  - model
  - doc
  - extension
  - bkg
  - di
  - bx64
  - int64
---

# IModelDocExtension.GetSceneBkgDIBx64

Gets the background image as DIBSECTION in 64-bit applications.

## Signature

```csharp
System.Int64 GetSceneBkgDIBx64()
```
## Parameters

None.

## Return Value

Background image as DIBSECTION

## Remarks

This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.
The memory for the image bits ( DIBSECTION.dsBm.bmBits) and this structure are allocated by the SOLIDWORKS Design application and must be deleted by the caller.

## See Also

- `IModelDoc2.GetSceneBkgDIB`
- `IModelDoc2.InsertBkgImage`
- `IModelDoc2.SceneBkgImageFileName`
- `IModelDoc2.SetSceneBkgDIB`
- `IModelDocExtension.SetSceneBkgDIBx64`