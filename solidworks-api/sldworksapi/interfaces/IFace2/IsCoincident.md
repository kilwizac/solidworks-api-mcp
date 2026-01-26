---
type: method
interface: IFace2
member: IsCoincident
returns: System.Int32
parameters:
  -
    name: FaceIn
    type: System.Object
    description: Face located on a different body
  -
    name: Tolerance
    type: System.Double
    description: Tolerance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.IIsCoincident
keywords:
  - face
  - see
  - also
  - iface2
  - coincident
  - iscoincident
  - face2
  - object
  - tolerance
  - double
  - int32
---

# IFace2.IsCoincident

Gets whether this face and the specified face, which is located on a different body, are coincident.

## Signature

```csharp
System.Int32 IsCoincident( 
   System.Object
FaceIn
,
   System.Double
Tolerance
)
```
## Parameters

- `FaceIn` (System.Object): Face located on a different body
- `Tolerance` (System.Double): Tolerance

## Return Value

Result as defined in swFaceCoincidentResult_e (see Remarks )

## Remarks

For two faces to be considered coincident, they must have similar corresponding loops and all points on one face must be within the specified tolerance of the other face, and vice versa.

## See Also

- `IFace2.IIsCoincident`