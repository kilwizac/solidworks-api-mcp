---
type: property
interface: IRibFeatureData2
member: RefSketchIndex
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IRibFeatureData2.DraftAngle
  - IRibFeatureData2.DraftOutward
keywords:
  - ribs
  - see
  - also
  - iribfeaturedata2
  - drafts
  - refsketchindex
  - rib
  - feature
  - data2
  - ref
  - sketch
  - index
  - int32
readonly: null
---

# IRibFeatureData2.RefSketchIndex

Gets or sets which sketch segment defines the draft direction of the rib feature.

## Signature

```csharp
System.Int32 RefSketchIndex {get; set;}
```
## Parameters

None.

## Return Value

Index of the sketch segment that defines the draft direction

## Remarks

This property is valid only when
IRibFeatureData2::EnableDraft
is set to true.

## See Also

- `IRibFeatureData2.DraftAngle`
- `IRibFeatureData2.DraftOutward`