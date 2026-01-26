---
type: method
interface: ISketchPoint
member: IGetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.GetID
keywords:
  - id
  - sketch
  - point
  - points
  - igetid
  - isketchpoint
  - int32
---

# ISketchPoint.IGetID

Gets the sketch point ID for this sketch point.

## Signature

```csharp
System.Int32 IGetID()
```
## Parameters

None.

## Return Value

Array with two longs or integers (see Long vs. Integer ) identifying this sketch point ID

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

## See Also

- `ISketchPoint.GetID`