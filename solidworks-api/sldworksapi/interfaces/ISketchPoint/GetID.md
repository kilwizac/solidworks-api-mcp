---
type: method
interface: ISketchPoint
member: GetID
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.IGetID
keywords:
  - id
  - sketch
  - point
  - points
  - getid
  - isketchpoint
  - object
  - ids
  - vba
  - locations
  - persistent
  - identifiers
  - types
  - vb
  - net
  - relations
---

# ISketchPoint.GetID

Gets the sketch point ID for this sketch point.

## Signature

```csharp
System.Object GetID()
```
## Parameters

None.

## Return Value

Array with two longs or two integers (see Long vs. Integer ) identifying this sketch point ID

## Remarks

The ID of the sketch point:
is an ordered pair (i1, i2). For sketch points, the combination of these two numbers is always unique within a specific sketch.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
.
Each point within a specific sketch has a unique ID. However, a point and other sketch objects can have the same ID. Likewise, in a second sketch, you may find a different sketch element with the same ID. Therefore, your application must keep track of:
sketch element type (that is, point, line, arc, spline, and so on)
owning sketch name
sketch element ID to uniquely identify a sketched item

## Examples

- Get Sketch Points and Sketch Point IDs (VBA) (Get_Sketch_Points_and_Their_Persistent_IDs_Example_VB.htm)
- Get x,y,z Locations of Points in Sketch (VBA) (Get_x,y,z_Locations_of_Points_in_Sketch_Example_VB.htm)
- Get Persistent Identifiers and Types for Sketch Points (VB.NET) (Get_Persistent_Identifiers_and_Types_for_Sketch_Points_Example_VBNET.htm)
- Get Persistent Identifiers and Types for Sketch Points (C#) (Get_Persistent_Identifiers_and_Types_for_Sketch_Points_Example_CSharp.htm)
- Get Sketch Relations (VBA) (Get_Sketch_Relations_Example_VB.htm)
- Get Sketch Relations (VB.NET) (Get_Sketch_Relations_Example_VBNET.htm)
- Get Sketch Relations (C#) (Get_Sketch_Relations_Example_CSharp.htm)

## See Also

- `ISketchPoint.IGetID`