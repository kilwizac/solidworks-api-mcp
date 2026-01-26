---
type: property
interface: IBoundaryBossFeatureData
member: MergeResult
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.MergeTangentFaces
keywords:
  - mergeresult
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - merge
  - result
  - boolean
readonly: null
---

# IBoundaryBossFeatureData.MergeResult

Gets or sets whether to merge all boundary feature elements.

## Signature

```csharp
System.Boolean MergeResult {get; set;}
```
## Parameters

None.

## Return Value

True to merge all boundary feature elements, false to not

## Remarks

This property is only available when the curves are
faces
or
edges
.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.MergeTangentFaces`