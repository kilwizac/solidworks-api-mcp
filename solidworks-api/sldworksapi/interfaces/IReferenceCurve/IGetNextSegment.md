---
type: method
interface: IReferenceCurve
member: IGetNextSegment
returns: Edge
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferenceCurve.GetFirstSegment
  - IReferenceCurve.GetNextSegment
  - IReferenceCurve.GetSegmentCount
  - IReferenceCurve.GetSegments
  - IReferenceCurve.IGetFirstSegment
  - IReferenceCurve.IGetSegments
keywords:
  - igetnextsegment
  - ireferencecurve
  - reference
  - curve
  - next
  - segment
  - edge
---

# IReferenceCurve.IGetNextSegment

Gets the next curve segment in the reference curve feature.

## Signature

```csharp
Edge IGetNextSegment()
```
## Parameters

None.

## Return Value

Next edge for the segment

## Remarks

Because edges returned by this method are not selectable; you should not call any Select methods to get them. Select methods return NULL for any returned edges.

## See Also

- `IReferenceCurve.GetFirstSegment`
- `IReferenceCurve.GetNextSegment`
- `IReferenceCurve.GetSegmentCount`
- `IReferenceCurve.GetSegments`
- `IReferenceCurve.IGetFirstSegment`
- `IReferenceCurve.IGetSegments`