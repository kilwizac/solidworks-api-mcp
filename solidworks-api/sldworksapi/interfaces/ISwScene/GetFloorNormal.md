---
type: method
interface: ISwScene
member: GetFloorNormal
returns: void
parameters:
  -
    name: Point
    type: MathPoint
    description: IMathPoint
  -
    name: Normal
    type: MathVector
    description: IMathVector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - scene
  - floor
  - getfloornormal
  - iswscene
  - sw
  - normal
  - point
  - math
  - vector
  - void
---

# ISwScene.GetFloorNormal

Gets the normal to the floor of this scene.

## Signature

```csharp
void GetFloorNormal( 
   out MathPoint
Point
,
   out MathVector
Normal
)
```
## Parameters

- `Point` (MathPoint): IMathPoint
- `Normal` (MathVector): IMathVector

## Return Value

Unknown.

## Examples

- ISwScene (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwScene)