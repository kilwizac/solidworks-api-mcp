---
type: method
interface: IModeler
member: ReplaceSurfaces
returns: System.Boolean
parameters:
  -
    name: NFaces
    type: System.Int32
    description: Number of faces to have surfaces replaced
  -
    name: FaceArray
    type: System.Object
    description: Array of faces to have the surfaces replaced
  -
    name: NewSurfArray
    type: System.Object
    description: Array of surfaces to be replaced in these faces
  -
    name: SenseArray
    type: System.Object
    description: Array of the senses of each surface in NewSurfArray
  -
    name: Tolerance
    type: System.Double
    description: Tolerance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.IReplaceSurfaces2
keywords:
  - surface
  - see
  - also
  - isurface
  - replace
  - surfaces
  - replacesurfaces
  - imodeler
  - modeler
  - faces
  - int32
  - face
  - array
  - object
  - new
  - surf
  - sense
  - tolerance
  - double
  - boolean
---

# IModeler.ReplaceSurfaces

Replaces the surfaces of the given faces.

## Signature

```csharp
System.Boolean ReplaceSurfaces( 
   System.Int32
NFaces
,
   System.Object
FaceArray
,
   System.Object
NewSurfArray
,
   System.Object
SenseArray
,
   System.Double
Tolerance
)
```
## Parameters

- `NFaces` (System.Int32): Number of faces to have surfaces replaced
- `FaceArray` (System.Object): Array of faces to have the surfaces replaced
- `NewSurfArray` (System.Object): Array of surfaces to be replaced in these faces
- `SenseArray` (System.Object): Array of the senses of each surface in NewSurfArray
- `Tolerance` (System.Double): Tolerance

## Return Value

True if operation is successful, false if not

## See Also

- `IModeler.IReplaceSurfaces2`