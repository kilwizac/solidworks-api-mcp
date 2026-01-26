---
type: method
interface: IReferenceCurve
member: IGetFirstSegment
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
  - IReferenceCurve.IGetNextSegment
  - IReferenceCurve.IGetSegments
keywords:
  - igetfirstsegment
  - ireferencecurve
  - reference
  - curve
  - first
  - segment
  - edge
---

# IReferenceCurve.IGetFirstSegment

Gets the first curve segment in a reference curve feature.

## Signature

```csharp
Edge IGetFirstSegment()
```
## Parameters

None.

## Return Value

First edge for the segment

## Remarks

Because edges returned by this method are not selectable; you should not call any Select methods to get them. Select methods return NULL for any returned edges.

## See Also

- `IReferenceCurve.GetFirstSegment`
- `IReferenceCurve.GetNextSegment`
- `IReferenceCurve.GetSegmentCount`
- `IReferenceCurve.GetSegments`
- `IReferenceCurve.IGetNextSegment`
- `IReferenceCurve.IGetSegments`