---
type: property
interface: ISplitLineFeatureData
member: SplitTools
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.GetSplitToolsCount
  - ISplitLineFeatureData.IGetSplitTools
  - ISplitLineFeatureData.ISetSplitTools
keywords:
  - splittools
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - tools
  - object
readonly: null
---

# ISplitLineFeatureData.SplitTools

Gets or sets the tools used to make the split.

## Signature

```csharp
System.Object SplitTools {get; set;}
```
## Parameters

None.

## Return Value

Array of tools used to make the split

## Remarks

Reference planes
,
planar model faces
, and
bodies
are valid tools for a split.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitLineFeatureData.GetSplitToolsCount`
- `ISplitLineFeatureData.IGetSplitTools`
- `ISplitLineFeatureData.ISetSplitTools`