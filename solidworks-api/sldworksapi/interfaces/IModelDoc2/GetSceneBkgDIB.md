---
type: method
interface: IModelDoc2
member: GetSceneBkgDIB
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DeleteBkgImage
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
  - getscenebkgdib
  - imodeldoc2
  - model
  - doc2
  - bkg
  - int32
---

# IModelDoc2.GetSceneBkgDIB

Gets background image as a LPDIBSECTION.

## Signature

```csharp
System.Int32 GetSceneBkgDIB()
```
## Parameters

None.

## Return Value

Background image as DIBSECTION

## Remarks

If your application must be x64 compatible, then use
IModelDocExtension::GetSceneBkgDIBx64
.
The memory for the image bits (DIBSECTION.dsBm.bmBits) and this structure are allocated by the SOLIDWORKS Design application and must be deleted by the caller.

## See Also

- `IModelDoc2.DeleteBkgImage`
- `IModelDoc2.InsertBkgImage`
- `IModelDoc2.SceneBkgImageFileName`
- `IModelDoc2.SetSceneBkgDIB`
- `IModelDocExtension.SetSceneBkgDIBx64`