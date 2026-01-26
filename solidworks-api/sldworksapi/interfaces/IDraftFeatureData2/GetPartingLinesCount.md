---
type: method
interface: IDraftFeatureData2
member: GetPartingLinesCount
returns: System.Int16
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IDraftFeatureData2.ISetPartingLines
  - IDraftFeatureData2.PartingLines
keywords:
  - parting
  - lines
  - see
  - also
  - ipartinglinefeaturedata
  - drafts
  - idraftfeaturedata2
  - getpartinglinescount
  - draft
  - feature
  - data2
  - count
  - int16
---

# IDraftFeatureData2.GetPartingLinesCount

Gets the number of parting lines for this draft feature.

## Signature

```csharp
System.Int16 GetPartingLinesCount()
```
## Parameters

None.

## Return Value

Number of parting lines

## Remarks

Call this method before calling
IDraftFeatureData2::IGetPartingLines
to determine the size of the array for that method.

## See Also

- `IDraftFeatureData2.ISetPartingLines`
- `IDraftFeatureData2.PartingLines`