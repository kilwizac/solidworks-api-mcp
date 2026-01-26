---
type: method
interface: IDrawingDoc
member: InsertRevisionCloud
returns: System.Object
parameters:
  -
    name: CloudShape
    type: System.Int32
    description: Revision cloud annotation shape as defined in swRevisionCloudShape_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.IInsertRevisionCloud
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - revision
  - clouds
  - irevisioncloud
  - insert
  - insertrevisioncloud
  - drawing
  - doc
  - cloud
  - shape
  - int32
  - object
  - vba
  - vb
  - net
---

# IDrawingDoc.InsertRevisionCloud

Inserts a revision cloud annotation with the specified shape into a view or sheet.

## Signature

```csharp
System.Object InsertRevisionCloud( 
   System.Int32
CloudShape
)
```
## Parameters

- `CloudShape` (System.Int32): Revision cloud annotation shape as defined in swRevisionCloudShape_e

## Return Value

IRevisionCloud

## Remarks

After calling this method:
Call
IRevisionCloud::GetAnnotation
to get the annotation object for the revision cloud.
Call
IAnnotation::SetPosition
to set the revision cloud position point on the drawing. If you eliminate this step, the revision cloud is rendered starting at the drawing origin of x=0, y=0, z=0. Set the revision cloud position point as follows:
For revision cloud shape...
Set the revision cloud position point to...
Ellipse
The center of the revision cloud.
Rectangle
A corner of the revision cloud.
Polygon
One of the points on the revision cloud.
Freehand
One of the points on the revision cloud.
Call
IRevisionCloud::ArcRadius
to set the arc radius of the revision cloud.
Call
IRevisionCloud::SetPathPointAtIndex
with Index = -1 to create points on the revision cloud as follows:
For revision cloud shape...
Call IRevisionCloud::SetPathPointAtIndex...
Ellipse
Once, specifying the coordinates of a corner of the ellipse-inscribed rectangle.
Rectangle
Once, specifying the coordinates of a corner opposite the revision cloud position point.
Polygon
(Number of polygon sides + 1) times, such that the first and last points coincide with the revision cloud position point.
Freehand
Indefinite number of times, such that the first and last points coincide with the revision cloud position point.
Call
IRevisionCloud::Finalize
to close the revision cloud path. Once the revision cloud path is closed, you can no longer add points to it.
Call IRevisionCloud::SetPathPointAtIndex to modify the position of an existing point on the revision cloud.

## Examples

- Insert Revision Cloud into a Drawing (VBA) (Insert_Revision_Cloud_into_Drawing_Example_VB.htm)
- Insert Revision Cloud into a Drawing (VB.NET) (Insert_Revision_Cloud_into_Drawing_Example_VBNET.htm)
- Insert Revision Cloud into a Drawing (C#) (Insert_Revision_Cloud_into_Drawing_Example_CSharp.htm)

## See Also

- `IDrawingDoc.IInsertRevisionCloud`