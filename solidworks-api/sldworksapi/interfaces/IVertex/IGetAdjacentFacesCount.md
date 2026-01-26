---
type: method
interface: IVertex
member: IGetAdjacentFacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IVertex.GetAdjacentFaces
keywords:
  - igetadjacentfacescount
  - ivertex
  - vertex
  - adjacent
  - faces
  - count
  - int32
---

# IVertex.IGetAdjacentFacesCount

Gets the number of faces adjacent to this vertex.

## Signature

```csharp
System.Int32 IGetAdjacentFacesCount()
```
## Parameters

None.

## Return Value

Number of faces adjacent to this vertex

## Remarks

Call this method before calling
IVertex::IGetAdjacentFaces
.

## See Also

- `IVertex.GetAdjacentFaces`