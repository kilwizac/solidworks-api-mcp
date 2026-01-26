---
type: method
interface: IDraftFeatureData2
member: IGetPartingLines
returns: Edge
parameters:
  -
    name: Count
    type: System.Int16
    description: Number of parting lines
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
  - igetpartinglines
  - draft
  - feature
  - data2
  - count
  - int16
  - edge
---

# IDraftFeatureData2.IGetPartingLines

Gets the parting lines that define this draft feature.

## Signature

```csharp
Edge IGetPartingLines( 
   System.Int16
Count
)
```
## Parameters

- `Count` (System.Int16): Number of parting lines

## Return Value

in-process, unmanaged C++: Pointer to an array of parting lines of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IDraftFeatureData2::GetPartingLinesCount
to determine the size of the returned array.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDraftFeatureData2.ISetPartingLines`
- `IDraftFeatureData2.PartingLines`