---
type: method
interface: IFeatureManager
member: AddSMNormalCut
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FinishSMNormalCut
  - ISMNormalCutFeatureData
keywords:
  - addsmnormalcut
  - ifeaturemanager
  - feature
  - manager
  - add
  - sm
  - normal
  - cut
  - int32
---

# IFeatureManager.AddSMNormalCut

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ISMNormalCutGroupData, and ISMNormalCutFeatureData2.

## Signature

```csharp
System.Int32 AddSMNormalCut()
```
## Parameters

None.

## Return Value

Result code as defined in swSMNormalCutError_e

## Remarks

To create a sheet metal Normal Cut feature, see the
IFeatureManager::AddSMNormalCutType
Remarks and Example sections.

## See Also

- `IFeatureManager.FinishSMNormalCut`
- `ISMNormalCutFeatureData`