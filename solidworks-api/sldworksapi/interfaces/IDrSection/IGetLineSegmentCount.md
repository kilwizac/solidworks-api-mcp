---
type: method
interface: IDrSection
member: IGetLineSegmentCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDrSection.GetLineInfo
  - IDrSection.ISetLineInfo
  - IDrSection.SetLineInfo
  - IView.EnumSectionLines
  - IView.GetSectionLines
keywords:
  - lines
  - section
  - views
  - see
  - also
  - idrsection
  - igetlinesegmentcount
  - dr
  - line
  - segment
  - count
  - int32
---

# IDrSection.IGetLineSegmentCount

Gets the number of line segments making up this section line.

## Signature

```csharp
System.Int32 IGetLineSegmentCount()
```
## Parameters

None.

## Return Value

Number of line segments in this section line

## Remarks

Use this method to determine the size of the array you need to allocate for the output of
IDrSection::IGetLineInfo
. The size of the array to allocate is (6 * the value returned by this method).

## See Also

- `IDrSection.GetLineInfo`
- `IDrSection.ISetLineInfo`
- `IDrSection.SetLineInfo`
- `IView.EnumSectionLines`
- `IView.GetSectionLines`