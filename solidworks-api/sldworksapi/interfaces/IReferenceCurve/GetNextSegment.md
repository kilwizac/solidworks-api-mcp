---
type: method
interface: IReferenceCurve
member: GetNextSegment
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IReferenceCurve.GetFirstSegment
  - IReferenceCurve.GetSegmentCount
  - IReferenceCurve.GetSegments
  - IReferenceCurve.IGetFirstSegment
  - IReferenceCurve.IGetNextSegment
  - IReferenceCurve.IGetSegments
keywords:
  - getnextsegment
  - ireferencecurve
  - reference
  - curve
  - next
  - segment
  - object
  - segments
  - vba
  - information
---

# IReferenceCurve.GetNextSegment

Gets the next curve segment in the reference curve feature.

## Signature

```csharp
System.Object GetNextSegment()
```
## Parameters

None.

## Return Value

Next edge for the segment

## Remarks

Because edges returned by this method are not selectable; you should not call any Select methods to get them. Select methods return NULL for any returned edges.

## Examples

- Get Curve Segments (VBA) (Get_Curve_Segments_Example_VB.htm)
- Get Reference Curve Information (VBA) (Get_Reference_Curve_Information_Example_VB.htm)

## See Also

- `IReferenceCurve.GetFirstSegment`
- `IReferenceCurve.GetSegmentCount`
- `IReferenceCurve.GetSegments`
- `IReferenceCurve.IGetFirstSegment`
- `IReferenceCurve.IGetNextSegment`
- `IReferenceCurve.IGetSegments`