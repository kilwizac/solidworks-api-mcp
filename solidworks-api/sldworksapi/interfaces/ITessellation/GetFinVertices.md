---
type: method
interface: ITessellation
member: GetFinVertices
returns: System.Object
parameters:
  -
    name: FinId
    type: System.Int32
    description: Fin ID of the fin from which you want to return the vertices IDs
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ITessellation.IGetFinVertices
keywords:
  - getfinvertices
  - itessellation
  - tessellation
  - fin
  - vertices
  - id
  - int32
  - object
  - tessellate
  - body
  - vb
  - net
  - vba
---

# ITessellation.GetFinVertices

Gets the IDs of the two vertices that correspond to a fin.

## Signature

```csharp
System.Object GetFinVertices( 
   System.Int32
FinId
)
```
## Parameters

- `FinId` (System.Int32): Fin ID of the fin from which you want to return the vertices IDs

## Return Value

Array of two longs or two integers (see Long vs. Integer ) describing the vertices IDs of a fin

## Examples

- Tessellate a Body (C#) (Tessellate_a_Body_Example_CSharp.htm)
- Tessellate a Body (VB.NET) (Tessellate_a_Body_Example_VBNET.htm)
- Tessellate a Body (VBA) (Tessellate_a_Body_Example_VB.htm)

## See Also

- `ITessellation.IGetFinVertices`