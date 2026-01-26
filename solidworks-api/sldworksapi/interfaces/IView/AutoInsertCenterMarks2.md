---
type: method
interface: IView
member: AutoInsertCenterMarks2
returns: System.Boolean
parameters:
  -
    name: InsertType
    type: System.Int32
    description: Features for which to insert center marks as defined in swAutoInsertCenterMarkTypes_e
  -
    name: InsertOption
    type: System.Int32
    description: Center mark options as defined in swCenterMarkConnectionLine_e
  -
    name: LinearSlotCenter
    type: System.Boolean
    description: True to add center marks to slot centers, false to add them to slot ends
  -
    name: ArcSlotCenter
    type: System.Boolean
    description: True to add center marks to arc centers, false to add them to arc ends
  -
    name: UseDocumentDefaults
    type: System.Boolean
    description: True to use the display settings specified in Tools > Options > Document Properties > Centerlines/Center Marks , false to use the display settings set by this method
  -
    name: Size
    type: System.Double
    description: Size of center mark; valid only if UseDocumentDefaults is false
  -
    name: Gap
    type: System.Double
    description: Size of gap between the center mark and extension line; valid only if UseDocumentDefaults is false and the Tools > Options > Document Properties > Centerlines/Center Marks > Scale by view scale check box is clear (see Remarks )
  -
    name: ExtendedLines
    type: System.Boolean
    description: True to extend lines from center mark points, false to not; valid only if UseDocumentDefaults is false
  -
    name: CenterLineFont
    type: System.Boolean
    description: True to use the centerline font, false to not; valid only if UseDocumentDefaults is false
  -
    name: Angle
    type: System.Double
    description: Rotation angle for the center mark; a positive angle rotates the center mark counterclockwise
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetCenterMarkCount2
  - IView.GetCenterMarkInfo
  - IView.GetCenterMarks
keywords:
  - annotation
  - see
  - also
  - iannotation
  - center
  - marks
  - drawing
  - views
  - iview
  - view
  - autoinsertcentermarks2
  - auto
  - insert
  - marks2
  - type
  - int32
  - option
  - linear
  - slot
  - boolean
  - arc
  - use
  - document
  - defaults
  - size
  - double
  - gap
  - extended
  - lines
  - line
  - font
  - angle
  - automatically
  - vb
  - net
  - vba
---

# IView.AutoInsertCenterMarks2

Automatically inserts the specified center marks in this view.

## Signature

```csharp
System.Boolean AutoInsertCenterMarks2( 
   System.Int32
InsertType
,
   System.Int32
InsertOption
,
   System.Boolean
LinearSlotCenter
,
   System.Boolean
ArcSlotCenter
,
   System.Boolean
UseDocumentDefaults
,
   System.Double
Size
,
   System.Double
Gap
,
   System.Boolean
ExtendedLines
,
   System.Boolean
CenterLineFont
,
   System.Double
Angle
)
```
## Parameters

- `InsertType` (System.Int32): Features for which to insert center marks as defined in swAutoInsertCenterMarkTypes_e
- `InsertOption` (System.Int32): Center mark options as defined in swCenterMarkConnectionLine_e
- `LinearSlotCenter` (System.Boolean): True to add center marks to slot centers, false to add them to slot ends
- `ArcSlotCenter` (System.Boolean): True to add center marks to arc centers, false to add them to arc ends
- `UseDocumentDefaults` (System.Boolean): True to use the display settings specified in Tools > Options > Document Properties > Centerlines/Center Marks , false to use the display settings set by this method
- `Size` (System.Double): Size of center mark; valid only if UseDocumentDefaults is false
- `Gap` (System.Double): Size of gap between the center mark and extension line; valid only if UseDocumentDefaults is false and the Tools > Options > Document Properties > Centerlines/Center Marks > Scale by view scale check box is clear (see Remarks )
- `ExtendedLines` (System.Boolean): True to extend lines from center mark points, false to not; valid only if UseDocumentDefaults is false
- `CenterLineFont` (System.Boolean): True to use the centerline font, false to not; valid only if UseDocumentDefaults is false
- `Angle` (System.Double): Rotation angle for the center mark; a positive angle rotates the center mark counterclockwise

## Return Value

True if successful, false if not

## Remarks

Call this method on each active view in which you want to insert center marks.
Before calling this method:
Call
IDrawingDoc::ActivateView
with the name of the view to activate.
Call
IDrawingDoc::ActiveDrawingView
to get a handle on the activated view.
Call
IDrawingDoc::InsertCenterMark3
if you want to insert one center mark in one view.
To...
Call...
Get the
Tools > Options > Document Properties > Centerlines/Center Marks > Scale by view scale
setting
IModelDocExtension::GetUserPreferenceToggle
swUserPreferenceToggle_e
.swDetailingCenterMarkScaleByViewScale,
swUserPreferenceOption_e
.swDetailingNoOptionSpecified
Set the
Tools > Options > Document Properties > Centerlines/Center Marks > Scale by view scale
setting
IModelDocExtension::SetUserPreferenceToggle
swUserPreferenceToggle_e.swDetailingCenterMarkScaleByViewScale, swUserPreferenceOption_e.swDetailingNoOptionSpecified, <
value
>

## Examples

- Automatically Insert Center Marks (C#) (Auto_Insert_Center_Marks_Example_CSharp.htm)
- Automatically Insert Center Marks (VB.NET) (Auto_Insert_Center_Marks_Example_VBNET.htm)
- Automatically Insert Center Marks (VBA) (Auto_Insert_Center_Marks_Example_VB.htm)

## See Also

- `IView.GetCenterMarkCount2`
- `IView.GetCenterMarkInfo`
- `IView.GetCenterMarks`