---
type: property
interface: ISMGussetFeatureData
member: DraftAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - draftangle
  - ismgussetfeaturedata
  - ism
  - gusset
  - feature
  - data
  - draft
  - angle
  - double
readonly: null
---

# ISMGussetFeatureData.DraftAngle

Gets or sets the angle by which to draft the side faces of this gusset.

## Signature

```csharp
System.Double DraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Draft angle in radians

## Remarks

This property is valid only if
ISMGussetFeatureData::DraftSideFaces
is true.

## Examples

- ISMGussetFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMGussetFeatureData)