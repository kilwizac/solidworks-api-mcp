---
type: property
interface: IFillPatternFeatureData
member: SkippedItemArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - skippeditemarray
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - skipped
  - item
  - array
  - object
readonly: null
---

# IFillPatternFeatureData.SkippedItemArray

Gets or sets the pattern instances to skip in this fill pattern feature.

## Signature

```csharp
System.Object SkippedItemArray {get; set;}
```
## Parameters

None.

## Return Value

Array of pattern instances to skip (see Remarks )

## Remarks

The array is linear and zero-based and contains the (row_id, column_id) of each pattern instance to skip.
For example,
[row_id_instance1, column_id_instance1, row_id_instance2, column_id_instance2, ...]