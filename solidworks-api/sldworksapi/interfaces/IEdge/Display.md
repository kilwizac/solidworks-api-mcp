---
type: method
interface: IEdge
member: Display
returns: void
parameters:
  -
    name: Width
    type: System.Int32
    description: Highlight width
  -
    name: Red
    type: System.Double
    description: Red value of RGB value for the color, between 0 and 1
  -
    name: Green
    type: System.Double
    description: Green value of RGB value for the color, between 0 and 1
  -
    name: Blue
    type: System.Double
    description: Blue value if RGB value for the color, between 0 and 1
  -
    name: HighlightState
    type: System.Boolean
    description: True if the edge is highlighted, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IEdge.Highlight
  - IFace2.Highlight
  - IFace2.IHighlight
  - IVertex.Display
keywords:
  - edge
  - see
  - also
  - iedge
  - display
  - options
  - highlight
  - edges
  - width
  - int32
  - red
  - double
  - green
  - blue
  - state
  - boolean
  - void
  - add
  - highlighting
  - remove
  - vba
  - faces
  - affected
  - feature
---

# IEdge.Display

Highlights this edge with the specified color.

## Signature

```csharp
void Display( 
   System.Int32
Width
,
   System.Double
Red
,
   System.Double
Green
,
   System.Double
Blue
,
   System.Boolean
HighlightState
)
```
## Parameters

- `Width` (System.Int32): Highlight width
- `Red` (System.Double): Red value of RGB value for the color, between 0 and 1
- `Green` (System.Double): Green value of RGB value for the color, between 0 and 1
- `Blue` (System.Double): Blue value if RGB value for the color, between 0 and 1
- `HighlightState` (System.Boolean): True if the edge is highlighted, false if not

## Return Value

Unknown.

## Remarks

To show the same edge with a different color, hide it and then set a different color. SOLIDWORKS shows the edge in the specified color until you hide it. Rotation, zoom, other repaint actions do not cause the edge to disappear.

## Examples

- Add Highlighting to or Remove Highlighting From Edges (VBA) (Add_Highlighting_to_or_Remove_Highlight_from_Edges_Example_VB.htm)
- Get Faces Affected by Feature (VBA) (Get_Faces_Affected_by_Feature_Example_VB.htm)

## See Also

- `IEdge.Highlight`
- `IFace2.Highlight`
- `IFace2.IHighlight`
- `IVertex.Display`