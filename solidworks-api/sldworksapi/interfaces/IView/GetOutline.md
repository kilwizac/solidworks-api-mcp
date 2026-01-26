---
type: method
interface: IView
member: GetOutline
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IGetOutline
keywords:
  - bounding
  - box
  - drawing
  - views
  - view
  - see
  - also
  - iview
  - getoutline
  - outline
  - object
  - reposition
  - avoid
  - overlap
  - vba
  - select
  - entity
  - position
---

# IView.GetOutline

Gets the bounding box for a view (sheet or drawing) in meters on the drawing page.

## Signature

```csharp
System.Object GetOutline()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is an array of 4 doubles with the following format:
0, X min
1, Y min
2, X max
3, Y max

## Examples

- Reposition Drawing Views to Avoid Overlap (VBA) (Reposition_Drawing_Views_to_Avoid_Overlap_Example_VB.htm)
- Select Entity in Drawing View (VBA) (Select_Entity_in_Drawing_View_Example_VB.htm)
- Get View Bounding Box and Position (C#) (Get_View_Bounding_Box_and_Position_Example_CSharp.htm)
- Get View Bounding Box and Position (C#) (Get_View_Bounding_Box_and_Position_Example_VBNET.htm)
- Get View Bounding Box and Position (VBA) (Get_View_Bounding_Box_and_Position_Example_VB.htm)

## See Also

- `IView.IGetOutline`