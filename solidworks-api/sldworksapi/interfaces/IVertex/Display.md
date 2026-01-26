---
type: method
interface: IVertex
member: Display
returns: void
parameters:
  -
    name: TopDoc
    type: ModelDoc2
    description: Model in which to display the vertex
  -
    name: Color
    type: System.Int32
    description: COLORREF value for highlighting
  -
    name: Scale
    type: System.Double
    description: Radius of the circle used to display the vertex NOTE: Vertex is displayed as a circle. By default, the radius is 4 pixels. Therefore, a scale of 1 is equal to 4 pixels.
  -
    name: HighlightState
    type: System.Boolean
    description: True to highlight the vertex, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - display
  - ivertex
  - vertex
  - top
  - doc
  - model
  - doc2
  - color
  - int32
  - scale
  - double
  - highlight
  - state
  - boolean
  - void
  - vertices
  - vba
---

# IVertex.Display

Highlights the vertex in the specified color.

## Signature

```csharp
void Display( 
   ModelDoc2
TopDoc
,
   System.Int32
Color
,
   System.Double
Scale
,
   System.Boolean
HighlightState
)
```
## Parameters

- `TopDoc` (ModelDoc2): Model in which to display the vertex
- `Color` (System.Int32): COLORREF value for highlighting
- `Scale` (System.Double): Radius of the circle used to display the vertex NOTE: Vertex is displayed as a circle. By default, the radius is 4 pixels. Therefore, a scale of 1 is equal to 4 pixels.
- `HighlightState` (System.Boolean): True to highlight the vertex, false to not

## Return Value

Unknown.

## Remarks

If HighlightState set to...
Then the vertex is...
True
Highlighted in the color specified for Color
False
Hidden and Color is ignored

## Examples

- Display Vertices (VBA) (Display_Vertices_Example_VB.htm)