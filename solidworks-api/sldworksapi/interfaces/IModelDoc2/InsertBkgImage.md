---
type: method
interface: IModelDoc2
member: InsertBkgImage
returns: void
parameters:
  -
    name: NewName
    type: System.String
    description: Path to image file including file extension
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
  - IModelDoc2.SceneBkgImageFileName
  - IModelDoc2.SetSceneBkgDIB
  - IModelDocExtension.GetSceneBkgDIBx64
  - IModelDocExtension.SetSceneBkgDIBx64
keywords:
  - background
  - image
  - scene
  - insertbkgimage
  - imodeldoc2
  - model
  - doc2
  - insert
  - bkg
  - new
  - name
  - string
  - void
---

# IModelDoc2.InsertBkgImage

Inserts the scene background image.

## Signature

```csharp
void InsertBkgImage( 
   System.String
NewName
)
```
## Parameters

- `NewName` (System.String): Path to image file including file extension

## Return Value

Unknown.

## See Also

- `IModelDoc2.DeleteBkgImage`
- `IModelDoc2.GetSceneBkgDIB`
- `IModelDoc2.SceneBkgImageFileName`
- `IModelDoc2.SetSceneBkgDIB`
- `IModelDocExtension.GetSceneBkgDIBx64`
- `IModelDocExtension.SetSceneBkgDIBx64`