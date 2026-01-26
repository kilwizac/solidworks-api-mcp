---
type: method
interface: IVertex
member: IGetAdjacentFaces
returns: Face2
parameters:
  -
    name: NFaceCount
    type: System.Int32
    description: Number of adjacent faces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IVertex.GetAdjacentFaces
keywords:
  - igetadjacentfaces
  - ivertex
  - vertex
  - adjacent
  - faces
  - face
  - count
  - int32
  - face2
---

# IVertex.IGetAdjacentFaces

Gets the faces adjacent to this vertex.

## Signature

```csharp
Face2 IGetAdjacentFaces( 
   System.Int32
NFaceCount
)
```
## Parameters

- `NFaceCount` (System.Int32): Number of adjacent faces

## Return Value

in-process, unmanaged C++: Pointer to an array of faces adjacent to this vertex VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IVertex::IGetAdjacentFacesCount
to get the number of faces adjacent to this vertex.

## See Also

- `IVertex.GetAdjacentFaces`