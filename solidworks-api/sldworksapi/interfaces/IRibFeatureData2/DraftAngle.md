---
type: property
interface: IRibFeatureData2
member: DraftAngle
returns: System.Double
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
  - draftangle
  - rib
  - feature
  - data2
  - draft
  - angle
  - double
readonly: null
---

# IRibFeatureData2.DraftAngle

Gets or sets the draft angle for the rib.

## Signature

```csharp
System.Double DraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle for the draft

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