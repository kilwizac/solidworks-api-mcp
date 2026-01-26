---
type: method
interface: IAnnotation
member: GetPosition
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.IGetPosition
  - IAnnotation.SetPosition
  - INote.LockPosition
keywords:
  - getposition
  - iannotation
  - annotation
  - position
  - object
  - insert
  - autoballoons
  - vba
  - traverse
  - annotations
  - vb
  - net
---

# IAnnotation.GetPosition

Gets the position of this annotation.

## Signature

```csharp
System.Object GetPosition()
```
## Parameters

None.

## Return Value

Array of doubles (see Remarks )

## Remarks

The retval is an array of 3 doubles, the x, y, z origin of the annotation.
If this method is not successful in retrieving the position of the annotation in Visual Basic for Applications (VBA), then the VARIANT SafeArray is empty (OLE Automation only), or the status value is S_false (COM only). Make sure that you check this value before using the returned position.
The following table lists the types of annotations that this method supports and the position of the x, y, z origin. In a drawing, the x, y, z origin is relative to the origin of the drawing sheet (the lower-left corner of the sheet).
Type of Annotation
Position of XYZ Origin
Datum Feature Symbols
Point where leader hits symbol
Datum Target Symbols
Centerpoint of the circle that is attached to the leader
Display Dimensions
Point of leader attachment centered on a text box border / center point of bottom border of text box
Geometric Tolerances
Upper-left corner of the symbol
Notes
Upper-left corner of the text box
Surface Finish Symbols
Lower-left point of symbol
Table Annotation
Position of x,y,z determined by
ITableAnnotation::AnchorType
Weld Symbols
Left endpoint of the main horizontal line in the symbol
If you use this method on any other types of annotations, SOLIDWORKS takes no action and returns false.

## Examples

- Insert Autoballoons (VBA) (Insert_Autoballoons_Example_VB_AutoBalloon2_VB.htm)
- Traverse Annotations (C#) (Traverse_Annotations_Example_CSharp.htm)
- Traverse Annotations (VB.NET) (Traverse_Annotations_Example_VBNET.htm)
- Traverse Annotations (VBA) (Traverse_Annotations_Example_VB.htm)

## See Also

- `IAnnotation.IGetPosition`
- `IAnnotation.SetPosition`
- `INote.LockPosition`