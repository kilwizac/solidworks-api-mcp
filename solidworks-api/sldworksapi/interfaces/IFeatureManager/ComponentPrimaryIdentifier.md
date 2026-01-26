---
type: property
interface: IFeatureManager
member: ComponentPrimaryIdentifier
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.SetComponentIdentifiers
keywords:
  - 3dexperience
  - solidworks
  - connected
  - componentprimaryidentifier
  - ifeaturemanager
  - feature
  - manager
  - component
  - primary
  - identifier
  - int32
readonly: true
---

# IFeatureManager.ComponentPrimaryIdentifier

Gets the primary element displayed for the components in the FeatureManager design tree.

## Signature

```csharp
System.Int32 ComponentPrimaryIdentifier {get;}
```
## Parameters

None.

## Return Value

Primary identifier as defined by swComponentIdentifier_e

## Remarks

This property works in both SOLIDWORKS Design and
SOLIDWORKS Design Augmented
.

## See Also

- `IFeatureManager.SetComponentIdentifiers`