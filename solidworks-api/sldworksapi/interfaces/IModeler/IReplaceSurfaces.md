---
type: method
interface: IModeler
member: IReplaceSurfaces
returns: System.Boolean
parameters:
  -
    name: NFaces
    type: System.Int32
    description: 
  -
    name: FaceArray
    type: Face
    description: 
  -
    name: NewSurfArray
    type: Surface
    description: 
  -
    name: SenseArray
    type: System.Int32
    description: 
  -
    name: Tolerance
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - ireplacesurfaces
  - imodeler
  - modeler
  - replace
  - surfaces
  - faces
  - int32
  - face
  - array
  - new
  - surf
  - surface
  - sense
  - tolerance
  - double
  - boolean
---

# IModeler.IReplaceSurfaces

Obsolete. Superseded by IModeler::IReplaceSurfaces2.

## Signature

```csharp
System.Boolean IReplaceSurfaces( 
   System.Int32
NFaces
,
   ref Face
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

- `NFaces` (System.Int32): 
- `FaceArray` (Face): 
- `NewSurfArray` (Surface): 
- `SenseArray` (System.Int32): 
- `Tolerance` (System.Double): 

## Return Value

Unknown.