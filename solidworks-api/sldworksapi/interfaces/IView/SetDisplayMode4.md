---
type: method
interface: IView
member: SetDisplayMode4
returns: System.Boolean
parameters:
  -
    name: UseParent
    type: System.Boolean
    description: True to use the parent's settings, false to use this drawing view's local settings (see Remarks )
  -
    name: Mode
    type: System.Int32
    description: Display mode of the drawing view as defined in swDisplayMode_e (see Remarks )
  -
    name: Faceted
    type: System.Boolean
    description: True for draft quality, false for precision quality (see Remarks )
  -
    name: Edges
    type: System.Boolean
    description: True if edges are displayed when this view is in shaded mode, false if not
  -
    name: CThreadHighQuality
    type: System.Boolean
    description: True for precision quality cosmetic threads, false for draft quality
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - view
  - see
  - also
  - iview
  - display
  - mode
  - drawing
  - views
  - setdisplaymode4
  - mode4
  - use
  - parent
  - boolean
  - int32
  - faceted
  - edges
  - thread
  - high
  - quality
---

# IView.SetDisplayMode4

Sets the display mode of this drawing view.

## Signature

```csharp
System.Boolean SetDisplayMode4( 
   System.Boolean
UseParent
,
   System.Int32
Mode
,
   System.Boolean
Faceted
,
   System.Boolean
Edges
,
   System.Boolean
CThreadHighQuality
)
```
## Parameters

- `UseParent` (System.Boolean): True to use the parent's settings, false to use this drawing view's local settings (see Remarks )
- `Mode` (System.Int32): Display mode of the drawing view as defined in swDisplayMode_e (see Remarks )
- `Faceted` (System.Boolean): True for draft quality, false for precision quality (see Remarks )
- `Edges` (System.Boolean): True if edges are displayed when this view is in shaded mode, false if not
- `CThreadHighQuality` (System.Boolean): True for precision quality cosmetic threads, false for draft quality

## Return Value

True if the display mode is reset, false if not

## Remarks

If UseParent is true and a parent view:
Exists, then this method's Mode, Faceted, and Edges parameters are ignored.
Does not exist, then this method does not change the current display mode of this drawing view.
Mode specifies the drawing view display as defined by swDisplayMode_e.:
swWIREFRAME
swHIDDEN (Hidden Lines Removed)
swHIDDEN_GREYED (Hidden Lines Visible)
swSHADED
swSHADED_EDGES
swDisplayMode_e also contains three other values that seem to indicate faceted (draft) geometry:
swFACETED_WIREFRAME
swFACETED_HIDDEN_GREYED
swFACETED_HIDDEN
However in this method, you must use the Faceted parameter (not the Mode parameter) to specify draft or precision quality. If you specify Mode with swFACETED_WIREFRAME, swFACETED_HIDDEN_GREYED, or swFACETED_HIDDEN, then SOLIDWORKS instead uses swWIREFRAME, swHIDDEN_GREYED, or swHIDDEN.
NOTE:
Just as d
isplaying geometry precisely can decrease performance, setting the Faceted argument to true (draft quality) can increase performance.
To determine for this view...
Use...
Whether its edges are displayed when it's in shaded mode
IView::GetDisplayEdgesInShadedMode
Whether its geometry is faceted
IView::GetFacettedHlrDisplay
Its current display mode
IView::GetDisplayMode2
Whether its parent's display mode is being used
IView::GetUseParentDisplayMode
Its cosmetic thread display quality
IView::GetCThreadQuality