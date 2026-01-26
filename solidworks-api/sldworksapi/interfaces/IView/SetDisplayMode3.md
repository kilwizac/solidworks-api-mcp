---
type: method
interface: IView
member: SetDisplayMode3
returns: System.Boolean
parameters:
  -
    name: UseParent
    type: System.Boolean
    description: True to use the parent's setting, false to use its own local settings
  -
    name: Mode
    type: System.Int32
    description: Display mode of the drawing view as defined in swDisplayMode_e
  -
    name: Facetted
    type: System.Boolean
    description: True if the geometry is displayed with draft quality, false if it is displayed with precision quality (see Remarks )
  -
    name: Edges
    type: System.Boolean
    description: True if edges are displayed when this view is in shaded mode, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetUseParentDisplayMode
  - IView.SetDisplayTangentEdges2
  - IView.UpdateViewDisplayGeometry
keywords:
  - setdisplaymode3
  - iview
  - view
  - display
  - mode3
  - use
  - parent
  - boolean
  - mode
  - int32
  - facetted
  - edges
  - change
  - draft
  - quality
  - vba
  - number
  - polylines
  - shaded
  - drawing
---

# IView.SetDisplayMode3

Obsolete. Superseded by IView::SetDisplayMode4.

## Signature

```csharp
System.Boolean SetDisplayMode3( 
   System.Boolean
UseParent
,
   System.Int32
Mode
,
   System.Boolean
Facetted
,
   System.Boolean
Edges
)
```
## Parameters

- `UseParent` (System.Boolean): True to use the parent's setting, false to use its own local settings
- `Mode` (System.Int32): Display mode of the drawing view as defined in swDisplayMode_e
- `Facetted` (System.Boolean): True if the geometry is displayed with draft quality, false if it is displayed with precision quality (see Remarks )
- `Edges` (System.Boolean): True if edges are displayed when this view is in shaded mode, false if not

## Return Value

True if the setting of the display mode was successful, false if not

## Remarks

The contents of a drawing view can be displayed in different modes, including Wireframe, HLR (Hidden Lines Removed), and HLV (Hidden Lines Visible), and Shaded. This is what the Mode argument indicates, and these values are contained in swDisplayMode_e. To display a drawing view shaded with edges, set swDrawingsDefaultDisplayTypeHLREdgesWhenShaded to True and set Mode to swSHADED.
This enumeration also contains three other values, swFACETED_WIREFRAME, swFACETED_HIDDEN_GREY, and swFACETEDHIDDEN, which indicate faceted display of geometry. However, in this method, the Facetted argument is how faceted display is indicated, and if any of those three values are used in the Mode argument, they are treated the same as swWIREFRAME, sw_HIDDEN_GREY, and sw_HIDDEN, respectively.
To determine if...
Then use...
Edges are displayed when this view is in shaded mode
IView::GetDisplayEdgesInShadedMode
This view is displayed with faceted geometry
IView::GetFacettedHlrDisplay
The display mode of this drawing view
IView::GetDisplayMode2
Although you cannot switch a drawing view from precision quality to draft quality, the geometry can still be displayed in draft quality if that is how your user preferences indicate new drawings views should be created. Once the drawing view has precision quality, whether you created it that way or changed it to that after its creation, you cannot change it to draft quality.
NOTE:
Displaying geometry precisely can increase display quality, but can decrease performance. Setting the Facetted argument to True can increase performance, but can decrease display quality.

## Examples

- Set View Display Mode (C++) (Set_View_Display_Mode_Example_CPlusPlus_COM.htm)
- Change Display Mode to Draft Quality (VBA) (Change_Display_Mode_to_Draft_Quality_Example_VB.htm)
- Get Number of Polylines in Shaded Mode Drawing View (VBA) (Get_Number_of_Polylines_in_Shaded_Mode_Drawing_View_Example_VB.htm)

## See Also

- `IView.GetUseParentDisplayMode`
- `IView.SetDisplayTangentEdges2`
- `IView.UpdateViewDisplayGeometry`