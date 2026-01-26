---
type: property
interface: ISMNormalCutFeatureData
member: Offset
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - offset
  - ismnormalcutfeaturedata
  - ism
  - normal
  - cut
  - feature
  - data
  - double
  - ifeaturemanager
  - addsmnormalcuttype
readonly: null
---

# ISMNormalCutFeatureData.Offset

Obsolete. See ISMNormalCutFeatureData2.

## Signature

```csharp
System.Double Offset {get; set;}
```
## Parameters

None.

## Return Value

0.0 <= offset <= 1.0

## Remarks

This property allows you to adjust the profile of the Normal Cut. Setting this property to 0.0 sets the profile to the circular edge on one side of the body. Setting it to 1.0 sets the profile to the circular edge on the opposite side of the body. A value in between 0.0 and 1.0 sets the profile to a circular edge somewhere in the middle of the body.

## Examples

- IFeatureManager::AddSMNormalCutType (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFeatureManager~AddSMNormalCutType)