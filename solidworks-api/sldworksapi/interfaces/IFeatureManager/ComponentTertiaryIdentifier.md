---
type: property
interface: IFeatureManager
member: ComponentTertiaryIdentifier
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
  - componenttertiaryidentifier
  - ifeaturemanager
  - feature
  - manager
  - component
  - tertiary
  - identifier
  - int32
readonly: true
---

# IFeatureManager.ComponentTertiaryIdentifier

Gets the tertiary element(s) displayed for the components in the FeatureManager design tree.

## Signature

```csharp
System.Int32 ComponentTertiaryIdentifier {get;}
```
## Parameters

None.

## Return Value

Tertiary identifier(s) as defined by swComponentIdentifier_e

## Remarks

This property works in both SOLIDWORKS Design and
SOLIDWORKS Design Augmented
.

## See Also

- `IFeatureManager.SetComponentIdentifiers`