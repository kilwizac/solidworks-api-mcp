---
type: method
interface: IPartingLineFeatureData
member: GetPartingLinesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingLineFeatureData.ISetPartingLines
  - IPartingLineFeatureData.PartingLines
keywords:
  - getpartinglinescount
  - ipartinglinefeaturedata
  - parting
  - line
  - feature
  - data
  - lines
  - count
  - int32
---

# IPartingLineFeatureData.GetPartingLinesCount

Gets the number of edges used as parting lines.

## Signature

```csharp
System.Int32 GetPartingLinesCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
IPartingLineFeatureData::IGetPartingLines
.

## See Also

- `IPartingLineFeatureData.ISetPartingLines`
- `IPartingLineFeatureData.PartingLines`