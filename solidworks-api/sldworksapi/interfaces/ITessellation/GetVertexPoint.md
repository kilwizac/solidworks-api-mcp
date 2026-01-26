---
type: method
interface: ITessellation
member: GetVertexPoint
returns: System.Object
parameters:
  -
    name: VertexId
    type: System.Int32
    description: Tessellation vertex ID of the vertex for which you want to get the X Y Z position values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getvertexpoint
  - itessellation
  - tessellation
  - vertex
  - point
  - id
  - int32
  - object
  - tessellate
  - body
  - vb
  - net
  - vba
---

# ITessellation.GetVertexPoint

Gets the X, Y and Z values that describe a tessellation vertex.

## Signature

```csharp
System.Object GetVertexPoint( 
   System.Int32
VertexId
)
```
## Parameters

- `VertexId` (System.Int32): Tessellation vertex ID of the vertex for which you want to get the X Y Z position values

## Return Value

Array of 3 doubles that describe the tessellation vertex's X, Y, and Z position

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Tessellate a Body (VB.NET) (Tessellate_a_Body_Example_VBNET.htm)
- Tessellate a Body (VBA) (Tessellate_a_Body_Example_VB.htm)