---
type: method
interface: ISketchHatch
member: IGetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchHatch.GetID
keywords:
  - id
  - sketch
  - hatch
  - igetid
  - isketchhatch
  - int32
---

# ISketchHatch.IGetID

Gets the ID for this sketch hatch.

## Signature

```csharp
System.Int32 IGetID()
```
## Parameters

None.

## Return Value

Array with two longs or integers (see Long vs. Integer ) identifying this sketch hatch ID (see Remarks )

## Remarks

The ID of the sketch hatch:
is an ordered pair (i1, i2). The combination of these two numbers is always unique within a specific sketch.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
.
Each entity within a specific sketch has a unique ID. However, a sketch line can have the same ID values as a sketch arc within the same sketch. Likewise, in a second sketch, you may find a different sketch element with the same ID. Therefore, your application must keep track of:
sketch element type (that is, point, line, arc, spline, and so on)
owning sketch name
sketch element ID to uniquely identify a sketched item
You can determine the sketch element type by using
ISketchSegment::GetType
.

## See Also

- `ISketchHatch.GetID`