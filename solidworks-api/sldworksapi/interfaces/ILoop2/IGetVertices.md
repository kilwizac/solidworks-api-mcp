---
type: method
interface: ILoop2
member: IGetVertices
returns: void
parameters:
  -
    name: NumVertices
    type: System.Int32
    description: Number of vertices in this loop
  -
    name: Vertices
    type: Vertex
    description: in-process, unmanaged C++: Pointer to an array of vertices for this loop VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ILoop2.GetVertexCount
  - ILoop2.GetVertices
keywords:
  - igetvertices
  - iloop2
  - loop2
  - vertices
  - num
  - int32
  - vertex
  - void
---

# ILoop2.IGetVertices

Gets the vertices in this loop.

## Signature

```csharp
void IGetVertices( 
   System.Int32
NumVertices
,
   out Vertex
Vertices
)
```
## Parameters

- `NumVertices` (System.Int32): Number of vertices in this loop
- `Vertices` (Vertex): in-process, unmanaged C++: Pointer to an array of vertices for this loop VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `ILoop2.GetVertexCount`
- `ILoop2.GetVertices`