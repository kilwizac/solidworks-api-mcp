---
type: property
interface: ISplitBodyFeatureData
member: TrimTools
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ISplitBodyFeatureData.GetTrimToolsCount
  - ISplitBodyFeatureData.IGetTrimTools
  - ISplitBodyFeatureData.ISetTrimTools
keywords:
  - trimtools
  - isplitbodyfeaturedata
  - split
  - body
  - feature
  - data
  - trim
  - tools
  - object
readonly: null
---

# ISplitBodyFeatureData.TrimTools

Gets the trimming surfaces used as trim tools in this Split feature.

## Signature

```csharp
System.Object TrimTools {get; set;}
```
## Parameters

None.

## Return Value

Array of trimming surfaces used as trim tools: Planar and non-planar faces Reference planes Reference surfaces Sketches

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISplitBodyFeatureData.GetTrimToolsCount`
- `ISplitBodyFeatureData.IGetTrimTools`
- `ISplitBodyFeatureData.ISetTrimTools`