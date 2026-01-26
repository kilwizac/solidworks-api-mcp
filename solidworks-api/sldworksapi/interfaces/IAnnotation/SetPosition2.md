---
type: method
interface: IAnnotation
member: SetPosition2
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of the origin of the annotation
  -
    name: Y
    type: System.Double
    description: Y coordinate of the origin of the annotation
  -
    name: Z
    type: System.Double
    description: Z coordinate of the origin of the annotation
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetPosition
  - INote.LockPosition
keywords:
  - annotation
  - see
  - also
  - iannotation
  - position
  - setposition2
  - position2
  - double
  - boolean
  - insert
  - note
  - vba
  - vb
  - net
  - traverse
  - annotations
---

# IAnnotation.SetPosition2

Sets the position of this annotation.

## Signature

```csharp
System.Boolean SetPosition2( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X coordinate of the origin of the annotation
- `Y` (System.Double): Y coordinate of the origin of the annotation
- `Z` (System.Double): Z coordinate of the origin of the annotation

## Return Value

True if the position of the annotation is successfully set, false if not

## Remarks

The following table lists the types of annotations that this method supports and the position of the x, y, z origin. In a drawing, the x, y, z origin is relative to the origin of the drawing sheet (the lower-left corner of the sheet).
Type of Annotation
Position of XYZ Origin
Datum Feature Symbols
Point where leader hits symbol
Datum Target Symbols
Center point of the circle that is attached to the leader
Display dimensions
Point of leader attachment centered on a text box border / center point of bottom border of text box
Geometric Tolerances
Upper-left corner of the symbol
Notes
Upper-left corner of the text box
Revision Clouds
Position of x,y,z determined by
IRevisionCloud::Shape
Surface Finish Symbols
Lower-left point of symbol
Table Annotations
Position of x,y,z determined by
ITableAnnotation::AnchorType
Weld Symbols
Left endpoint of the main horizontal line in the symbol
If you use this method on any other types of annotations, SOLIDWORKS takes no action and returns false.
The position of an annotation can be subject to certain restrictions. These restrictions apply to setting the position through the user interface and using this method. One example of a restriction is a surface-finish symbol that is inserted directly on a face (that is, no leaders). It can only be moved within the borders of that face. If it is inserted directly on an edge, it can only be moved along that edge or extensions of that edge. Datum feature symbols have similar restrictions. If this method attempts to set a position of an annotation that violates any restrictions, the annotation is placed as near as possible to the specified position.
The position of table annotations cannot be set if the table is anchored. Use
ITableAnnotation::Anchored
to determine if the table is anchored.
If a dimension has
offset text
, and you want to move...
Then...
Dimension text, dimension line, and extension lines
Turn offset text off.
Use this method to move the dimension text, dimension line, and extension lines.
Turn offset text back on.
Dimension text only
Use this method to move the dimension text. The dimension line and extension lines will not move.
Because radial and diametric dimensions are already attached to the end of a leader, this property is not available for these types of dimensions.

## Examples

- Insert a Note (VBA) (Insert_a_Note_Example_VB.htm)
- Insert a Note (VB.NET) (Insert_a_Note_Example_VBNET.htm)
- Insert a Note (C#) (Insert_a_Note_Example_CSharp.htm)
- Traverse Annotations (C#) (Traverse_Annotations_Example_CSharp.htm)
- Traverse Annotations (VB.NET) (Traverse_Annotations_Example_VBNET.htm)
- Traverse Annotations (VBA) (Traverse_Annotations_Example_VB.htm)

## See Also

- `IAnnotation.GetPosition`
- `INote.LockPosition`