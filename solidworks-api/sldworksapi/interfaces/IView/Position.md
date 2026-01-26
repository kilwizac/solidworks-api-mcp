---
type: property
interface: IView
member: Position
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetViewXform
  - IView.GetXform
  - IView.IGetViewXform
  - IView.IGetXform
  - IView.IPosition
  - IView.ISetXform
  - IView.ModelToViewTransform
  - IView.PositionLocked
  - IView.SetXform
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - position
  - view
  - object
  - insert
  - dxf
  - file
  - vba
  - reposition
  - avoid
  - overlap
  - bounding
  - box
  - vb
  - net
readonly: null
---

# IView.Position

Gets or sets the X and Y location of the model view's geometric center, relative to the drawing sheet origin.

## Signature

```csharp
System.Object Position {get; set;}
```
## Parameters

None.

## Return Value

Array of 2 doubles (see Remarks )

## Remarks

Any view alignments that might affect this view are handled the same way as if you were using the SOLIDWORKS Design user interface to draw the view to move it. If it is aligned with another view, it will only be allowed to move along the alignment vector. If it has child views that are aligned with it, those views will also be moved along with this view.
Changing this property can cause changes to the graphics of the drawing. After making all the view-related changes, call
IModelDoc2::EditRebuild3
to regenerate the drawing to see these changes.
To move a drawing view independently of its child views, use
IView::SetViewPosition
.

## Examples

- Insert and Position DXF File in Drawing (VBA) (Insert_and_Position_DXF_File_in_Drawing_Example_VB.htm)
- Reposition Drawing Views to Avoid Overlap (VBA) (Reposition_Drawing_Views_to_Avoid_Overlap_Example_VB.htm)
- Get View Bounding Box and Position (C#) (Get_View_Bounding_Box_and_Position_Example_CSharp.htm)
- Get View Bounding Box and Position (VB.NET) (Get_View_Bounding_Box_and_Position_Example_VBNET.htm)
- Get View Bounding Box and Position (VBA) (Get_View_Bounding_Box_and_Position_Example_VB.htm)

## See Also

- `IView.GetViewXform`
- `IView.GetXform`
- `IView.IGetViewXform`
- `IView.IGetXform`
- `IView.IPosition`
- `IView.ISetXform`
- `IView.ModelToViewTransform`
- `IView.PositionLocked`
- `IView.SetXform`