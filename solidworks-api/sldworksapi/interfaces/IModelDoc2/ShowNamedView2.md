---
type: method
interface: IModelDoc2
member: ShowNamedView2
returns: void
parameters:
  -
    name: VName
    type: System.String
    description: Name of the view to display or an empty string to use ViewId instead
  -
    name: ViewId
    type: System.Int32
    description: ID of the view to display as defined by swStandardViews_e or -1 to use the VName argument instead; if you specify both VName and ViewId, then ViewId takes precedence if the two arguments do not resolve to the same view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.DeleteNamedView
  - IModelDoc2.NameView
  - IModelDocExtension.GetNamedViewRotation
  - IModelDocExtension.IGetNamedViewRotation
  - IModelDocExtension.ResetStandardViews
  - IModelDocExtension.UpdateStandardViews
keywords:
  - named
  - views
  - view
  - see
  - also
  - iview
  - shownamedview2
  - imodeldoc2
  - model
  - doc2
  - show
  - view2
  - name
  - string
  - id
  - int32
  - void
  - add
  - component
  - mate
  - change
  - isometric
  - zoom
  - fit
  - mode
  - vba
  - create
  - revolve
  - features
  - sketch
  - points
  - wizard
  - hole
  - spring
  - motion
  - study
  - vb
  - net
---

# IModelDoc2.ShowNamedView2

Shows the specified view.

## Signature

```csharp
void ShowNamedView2( 
   System.String
VName
,
   System.Int32
ViewId
)
```
## Parameters

- `VName` (System.String): Name of the view to display or an empty string to use ViewId instead
- `ViewId` (System.Int32): ID of the view to display as defined by swStandardViews_e or -1 to use the VName argument instead; if you specify both VName and ViewId, then ViewId takes precedence if the two arguments do not resolve to the same view

## Return Value

Unknown.

## Remarks

To set a named view to the active view in a drawing, the drawing view that contains the named view must be selected.
To orient the selected face to its Normal To view, specify
*Normal To
for VName and
-1
for ViewId.

## Examples

- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)
- Change to Isometric and Zoom to Fit View Mode (VBA) (Change_to_Isometric_and_Zoom_to_Fit_View_Mode_Example_VB.htm)
- Create Revolve Features (VBA) (Create_Revolve_Features_Example_VB.htm)
- Get Sketch Points in Wizard Hole (VBA) (Get_Sketch_Points_in_Wizard_Hole_Example_VB.htm)
- Show Named View (VBA) (Show_Named_View_Example_VB.htm)
- Add Spring to Motion Study (C#) (Add_Spring_to_Motion_Study_Example_CSharp.htm)
- Add Spring to Motion Study (VB.NET) (Add_Spring_to_Motion_Study_Example_VBNET.htm)
- Add Spring to Motion Study (VBA) (Add_Spring_to_Motion_Study_Example_VB.htm)

## See Also

- `IModelDoc2.DeleteNamedView`
- `IModelDoc2.NameView`
- `IModelDocExtension.GetNamedViewRotation`
- `IModelDocExtension.IGetNamedViewRotation`
- `IModelDocExtension.ResetStandardViews`
- `IModelDocExtension.UpdateStandardViews`