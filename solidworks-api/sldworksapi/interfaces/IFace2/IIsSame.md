---
type: method
interface: IFace2
member: IIsSame
returns: System.Boolean
parameters:
  -
    name: FaceIn
    type: Face2
    description: Pointer to the face to which to compare this face
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IFace2.IsSame
keywords:
  - iissame
  - iface2
  - face2
  - same
  - face
  - boolean
---

# IFace2.IIsSame

Gets whether the two faces are the same.

## Signature

```csharp
System.Boolean IIsSame( 
   Face2
FaceIn
)
```
## Parameters

- `FaceIn` (Face2): Pointer to the face to which to compare this face

## Return Value

True if the two faces are the same, false if they are different

## See Also

- `IFace2.IsSame`