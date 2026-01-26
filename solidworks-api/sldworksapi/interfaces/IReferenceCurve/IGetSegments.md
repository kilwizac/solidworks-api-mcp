---
type: method
interface: IReferenceCurve
member: IGetSegments
returns: Edge
parameters:
  -
    name: NumSegments
    type: System.Int32
    description: Number of segments in the reference curve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferenceCurve.GetFirstSegment
  - IReferenceCurve.GetNextSegment
  - IReferenceCurve.GetSegments
  - IReferenceCurve.IGetFirstSegment
  - IReferenceCurve.IGetNextSegment
keywords:
  - igetsegments
  - ireferencecurve
  - reference
  - curve
  - segments
  - num
  - int32
  - edge
---

# IReferenceCurve.IGetSegments

Gets the segments in this reference curve.

## Signature

```csharp
Edge IGetSegments( 
   System.Int32
NumSegments
)
```
## Parameters

- `NumSegments` (System.Int32): Number of segments in the reference curve

## Return Value

in-process, unmanaged C++: Pointer to an array of segments in the reference curve VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IReferenceCurve::GetSegmentCount
to get NumSegments.

## See Also

- `IReferenceCurve.GetFirstSegment`
- `IReferenceCurve.GetNextSegment`
- `IReferenceCurve.GetSegments`
- `IReferenceCurve.IGetFirstSegment`
- `IReferenceCurve.IGetNextSegment`