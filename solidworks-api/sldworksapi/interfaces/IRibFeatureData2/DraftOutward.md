---
type: property
interface: IRibFeatureData2
member: DraftOutward
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRibFeatureData2.RefSketchIndex
keywords:
  - ribs
  - see
  - also
  - iribfeaturedata2
  - drafts
  - draftoutward
  - rib
  - feature
  - data2
  - draft
  - outward
  - boolean
readonly: null
---

# IRibFeatureData2.DraftOutward

Gets or sets whether the rib has an outward draft.

## Signature

```csharp
System.Boolean DraftOutward {get; set;}
```
## Parameters

None.

## Return Value

True if the draft is outward, false if inward

## Remarks

Changing the value of this property does not affect geometry until
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
is called.
This property is valid only when
IRibFeatureData2::EnableDraft
is set to true.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)

## See Also

- `IRibFeatureData2.RefSketchIndex`