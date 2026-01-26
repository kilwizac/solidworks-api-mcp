---
type: method
interface: IModelDoc2
member: SetSceneBkgDIB
returns: void
parameters:
  -
    name: L_dib
    type: System.Int32
    description: DIBSECTION
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DeleteBkgImage
  - IModelDoc2.GetSceneBkgDIB
  - IModelDoc2.InsertBkgImage
  - IModelDoc2.SceneBkgImageFileName
  - IModelDocExtension.GetSceneBkgDIBx64
keywords:
  - background
  - image
  - scene
  - device
  - independent
  - bitmap
  - dib
  - scenes
  - setscenebkgdib
  - imodeldoc2
  - model
  - doc2
  - bkg
  - int32
  - void
---

# IModelDoc2.SetSceneBkgDIB

Sets background image described by DIBSECTION data.

## Signature

```csharp
void SetSceneBkgDIB( 
   System.Int32
L_dib
)
```
## Parameters

- `L_dib` (System.Int32): DIBSECTION

## Return Value

Unknown.

## Remarks

If your application must be x64 compatible, then use
IModelDocExtension::SetSceneBkgDIBx64
.
Old background images are deleted automatically.
For more information about DIBSECTION, see Microsoft's documentation.

## See Also

- `IModelDoc2.DeleteBkgImage`
- `IModelDoc2.GetSceneBkgDIB`
- `IModelDoc2.InsertBkgImage`
- `IModelDoc2.SceneBkgImageFileName`
- `IModelDocExtension.GetSceneBkgDIBx64`