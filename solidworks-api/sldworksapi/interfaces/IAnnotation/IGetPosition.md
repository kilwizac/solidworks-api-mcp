---
type: method
interface: IAnnotation
member: IGetPosition
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetPosition
  - IAnnotation.SetPosition
  - INote.LockPosition
keywords:
  - igetposition
  - iannotation
  - annotation
  - position
  - double
---

# IAnnotation.IGetPosition

Gets the position of this annotation.

## Signature

```csharp
System.Double IGetPosition()
```
## Parameters

None.

## Return Value

Pointer to an array of doubles (see Remarks )

## Remarks

The retval is an array of 3 doubles, the x, y, z origin of the annotation.
If this method is not successful in retrieving the position of the annotation, the status value is S_false (COM only). Make sure that you check this value before using the returned position.
The following table lists the types of annotations that this method supports and the position of the x, y, z origin. In a drawing, the x, y, z origin is relative to the origin of the drawing sheet (the lower-left corner of the sheet).
Type of Annotation
Position of XYZ Origin
Datum Feature Symbols
Point where leader hits symbol
Datum Target Symbols
Centerpoint of the circle that is attached to the leader
Dimensions
Upper-left corner of the text box of the dimension
Geometric Tolerances
Upper-left corner of the symbol
Notes
Upper-left corner of the text box
Surface Finish Symbols
Lower-left point of symbol
Table Annotations
Position of x,y,z determined by
ITableAnnotation::AnchorType
Weld Symbols
Left endpoint of the main horizontal line in the symbol
If you use this method on any other types of annotations, SOLIDWORKS takes no action
and returns false.

## See Also

- `IAnnotation.GetPosition`
- `IAnnotation.SetPosition`
- `INote.LockPosition`