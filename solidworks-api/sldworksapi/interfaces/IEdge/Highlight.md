---
type: method
interface: IEdge
member: Highlight
returns: void
parameters:
  -
    name: State
    type: System.Boolean
    description: True adds highlights to this edge, false removes highlights from this edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.Display
  - IFace2.Highlight
  - IFace2.IHighlight
  - IVertex.Display
keywords:
  - edge
  - see
  - also
  - iedge
  - highlight
  - edges
  - state
  - boolean
  - void
---

# IEdge.Highlight

Add highlights or removes highlights from this edge.

## Signature

```csharp
void Highlight( 
   System.Boolean
State
)
```
## Parameters

- `State` (System.Boolean): True adds highlights to this edge, false removes highlights from this edge

## Return Value

Unknown.

## See Also

- `IEdge.Display`
- `IFace2.Highlight`
- `IFace2.IHighlight`
- `IVertex.Display`