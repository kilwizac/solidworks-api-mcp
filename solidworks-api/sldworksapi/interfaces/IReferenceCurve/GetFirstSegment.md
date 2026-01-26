---
type: method
interface: IReferenceCurve
member: GetFirstSegment
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferenceCurve.GetNextSegment
  - IReferenceCurve.GetSegmentCount
  - IReferenceCurve.GetSegments
  - IReferenceCurve.IGetFirstSegment
  - IReferenceCurve.IGetNextSegment
  - IReferenceCurve.IGetSegments
keywords:
  - getfirstsegment
  - ireferencecurve
  - reference
  - curve
  - first
  - segment
  - object
  - segments
  - vba
  - information
---

# IReferenceCurve.GetFirstSegment

Gets the first curve segment in a reference curve feature.

## Signature

```csharp
System.Object GetFirstSegment()
```
## Parameters

None.

## Return Value

First edge for the segment

## Remarks

Because edges returned by this method are not selectable; you should not call any Select methods to get them. Select methods return NULL for any returned edges.

## Examples

- Get Curve Segments (VBA) (Get_Curve_Segments_Example_VB.htm)
- Get Reference Curve Information (VBA) (Get_Reference_Curve_Information_Example_VB.htm)

## See Also

- `IReferenceCurve.GetNextSegment`
- `IReferenceCurve.GetSegmentCount`
- `IReferenceCurve.GetSegments`
- `IReferenceCurve.IGetFirstSegment`
- `IReferenceCurve.IGetNextSegment`
- `IReferenceCurve.IGetSegments`