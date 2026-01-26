---
type: method
interface: IPartDoc
member: FeatureXpert
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - parts
  - ui
related:
  - IFeatureManager.DraftXpertChange
  - IFeatureManager.DraftXpertRemove
keywords:
  - featurexpert
  - ipartdoc
  - part
  - doc
  - feature
  - xpert
  - void
---

# IPartDoc.FeatureXpert

Executes FeatureXpert, powered by SOLIDWORKS Intelligent Feature Technology ( SWIFT), in parts.

## Signature

```csharp
void FeatureXpert()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

FeatureXpert works behind the scenes to resolve feature errors in
constant radius fillets
,
neutral plane drafts
, and
reference planes
.
You must enable the FeatureXpert system option before using this method:
swApp.SetUserPreferenceToggle swUserEnableAutoFix, True

## See Also

- `IFeatureManager.DraftXpertChange`
- `IFeatureManager.DraftXpertRemove`