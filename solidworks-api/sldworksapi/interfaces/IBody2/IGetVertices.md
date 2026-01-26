---
type: method
interface: IBody2
member: IGetVertices
returns: Vertex
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of vertices in this body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.GetVertices
keywords:
  - bodies
  - see
  - also
  - ibody2
  - vertex
  - ivertex
  - body
  - igetvertices
  - body2
  - vertices
  - count
  - int32
---

# IBody2.IGetVertices

Gets the vertices in this body.

## Signature

```csharp
Vertex IGetVertices( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of vertices in this body

## Return Value

in-process, unmanaged C++: Pointer to an array of vertices in this body VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBody2::GetVertexCount
to determine the size of the array.

## See Also

- `IBody2.GetVertices`