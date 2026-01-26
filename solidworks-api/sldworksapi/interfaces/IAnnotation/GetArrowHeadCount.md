---
type: method
interface: IAnnotation
member: GetArrowHeadCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetArrowHeadStyleAtIndex
  - IAnnotation.SetArrowHeadSizeAtIndex
  - IAnnotation.SetArrowHeadStyleAtIndex
keywords:
  - arrows
  - leaders
  - getarrowheadcount
  - iannotation
  - annotation
  - arrow
  - head
  - count
  - int32
---

# IAnnotation.GetArrowHeadCount

Gets the number of arrowheads on this symbol.

## Signature

```csharp
System.Int32 GetArrowHeadCount()
```
## Parameters

None.

## Return Value

Number of arrowheads on this annotation

## Remarks

This method works with traditional leaders on annotations and
multijog leaders
.
Call this method before calling
IAnnotation::GetArrowHeadSizeAtIndex
to specify the annotation for which to get the arrow head size.

## See Also

- `IAnnotation.GetArrowHeadStyleAtIndex`
- `IAnnotation.SetArrowHeadSizeAtIndex`
- `IAnnotation.SetArrowHeadStyleAtIndex`