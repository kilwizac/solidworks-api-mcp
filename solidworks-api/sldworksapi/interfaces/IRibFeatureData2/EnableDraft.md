---
type: property
interface: IRibFeatureData2
member: EnableDraft
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
  - enabledraft
  - rib
  - feature
  - data2
  - enable
  - draft
  - boolean
readonly: null
---

# IRibFeatureData2.EnableDraft

Gets or sets whether the rib has an associated draft.

## Signature

```csharp
System.Boolean EnableDraft {get; set;}
```
## Parameters

None.

## Return Value

True if the rib has a draft, false if not

## Remarks

Changing the value of this property does not affect geometry until
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
is called.
Use
IRibFeatureData2::DraftOutward
and
IRibFeatureData2::DraftAngle
for additional draft control.

## Examples

- IRibFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRibFeatureData2)

## See Also

- `IRibFeatureData2.RefSketchIndex`