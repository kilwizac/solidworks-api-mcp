---
type: method
interface: IView
member: GetDisplayMode2
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDisplayEdgesInShadedMode
  - IView.GetDisplayTangentEdges2
  - IView.GetFacettedHlrDisplay
  - IView.GetUseParentDisplayMode
  - IView.SetDisplayMode3
  - IView.SetDisplayTangentEdges2
  - IView.UpdateViewDisplayGeometry
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - display
  - mode
  - view
  - modes
  - getdisplaymode2
  - mode2
  - int32
  - change
  - draft
  - quality
  - vba
  - number
  - polylines
  - shaded
---

# IView.GetDisplayMode2

Gets the current display mode of the view.

## Signature

```csharp
System.Int32 GetDisplayMode2()
```
## Parameters

None.

## Return Value

Current display mode of the drawing view as defined in swDisplayMode_e

## Examples

- Set View Display Mode (C++) (Set_View_Display_Mode_Example_CPlusPlus_COM.htm)
- Change Display Mode to Draft Quality (VBA) (Change_Display_Mode_to_Draft_Quality_Example_VB.htm)
- Get Number of Polylines in Shaded Mode Drawing View (VBA) (Get_Number_of_Polylines_in_Shaded_Mode_Drawing_View_Example_VB.htm)

## See Also

- `IView.GetDisplayEdgesInShadedMode`
- `IView.GetDisplayTangentEdges2`
- `IView.GetFacettedHlrDisplay`
- `IView.GetUseParentDisplayMode`
- `IView.SetDisplayMode3`
- `IView.SetDisplayTangentEdges2`
- `IView.UpdateViewDisplayGeometry`