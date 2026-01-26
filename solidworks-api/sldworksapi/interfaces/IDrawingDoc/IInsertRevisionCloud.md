---
type: method
interface: IDrawingDoc
member: IInsertRevisionCloud
returns: RevisionCloud
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
  - IDrawingDoc.InsertRevisionCloud
keywords:
  - drawings
  - see
  - also
  - idrawingdoc
  - revision
  - clouds
  - irevisioncloud
  - insert
  - iinsertrevisioncloud
  - drawing
  - doc
  - cloud
  - shape
  - int32
---

# IDrawingDoc.IInsertRevisionCloud

Inserts a revision cloud annotation with the specified shape into a view or sheet.

## Signature

```csharp
RevisionCloud IInsertRevisionCloud( 
   System.Int32
CloudShape
)
```
## Parameters

- `CloudShape` (System.Int32): Revision cloud annotation shape as defined in swRevisionCloudShape_e

## Return Value

in-process, unmanaged C++: Pointer to an IRevisionCloud VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

After calling this method:
Call
IRevisionCloud::IGetAnnotation
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

## See Also

- `IDrawingDoc.InsertRevisionCloud`