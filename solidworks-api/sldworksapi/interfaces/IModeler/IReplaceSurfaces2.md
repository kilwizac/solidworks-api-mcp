---
type: method
interface: IModeler
member: IReplaceSurfaces2
returns: System.Boolean
parameters:
  -
    name: NFaces
    type: System.Int32
    description: Number of faces to have surfaces replaced
  -
    name: FaceArray
    type: Face2
    description: Array of faces to have the surfaces replaced
  -
    name: NewSurfArray
    type: Surface
    description: Array of surfaces to be replaced in these faces
  -
    name: SenseArray
    type: System.Int32
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
  - IModeler.ReplaceSurfaces
keywords:
  - surface
  - see
  - also
  - isurface
  - replace
  - surfaces
  - ireplacesurfaces2
  - imodeler
  - modeler
  - surfaces2
  - faces
  - int32
  - face
  - array
  - face2
  - new
  - surf
  - sense
  - tolerance
  - double
  - boolean
---

# IModeler.IReplaceSurfaces2

Replaces the surfaces of the given faces.

## Signature

```csharp
System.Boolean IReplaceSurfaces2( 
   System.Int32
NFaces
,
   ref Face2
FaceArray
,
   ref Surface
NewSurfArray
,
   ref System.Int32
SenseArray
,
   System.Double
Tolerance
)
```
## Parameters

- `NFaces` (System.Int32): Number of faces to have surfaces replaced
- `FaceArray` (Face2): Array of faces to have the surfaces replaced
- `NewSurfArray` (Surface): Array of surfaces to be replaced in these faces
- `SenseArray` (System.Int32): Array of the senses of each surface in NewSurfArray
- `Tolerance` (System.Double): Tolerance

## Return Value

True if operation is successful, false if not

## See Also

- `IModeler.ReplaceSurfaces`