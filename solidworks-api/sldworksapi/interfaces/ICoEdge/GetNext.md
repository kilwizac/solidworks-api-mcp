---
type: method
interface: ICoEdge
member: GetNext
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICoEdge.IGetNext
  - ILoop2.GetCoEdgeCount
  - ILoop2.GetCoEdges
  - ILoop2.GetFirstCoEdge
  - ILoop2.IGetCoEdges
  - ILoop2.IGetFirstCoEdge
keywords:
  - getnext
  - icoedge
  - co
  - edge
  - next
  - object
  - determine
  - type
  - face
  - vba
  - select
  - tangent
  - edges
  - via
  - iteration
  - faces
---

# ICoEdge.GetNext

Gets the next coedge from the current coedge.

## Signature

```csharp
System.Object GetNext()
```
## Parameters

None.

## Return Value

Coedge from the current coedge

## Remarks

This method is cyclical; it loops back on itself and does not return NULL.

## Examples

- Determine Type of Face (VBA) (Determine_Type_of_Face_Example_VB.htm)
- Select Tangent Edges via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)
- Select Tangent Faces (VBA) (Select_Tangent_Faces_Example_VB.htm)

## See Also

- `ICoEdge.IGetNext`
- `ILoop2.GetCoEdgeCount`
- `ILoop2.GetCoEdges`
- `ILoop2.GetFirstCoEdge`
- `ILoop2.IGetCoEdges`
- `ILoop2.IGetFirstCoEdge`