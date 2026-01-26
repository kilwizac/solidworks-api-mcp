---
type: property
interface: IFeatureManager
member: ComponentSecondaryIdentifier
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
  - componentsecondaryidentifier
  - ifeaturemanager
  - feature
  - manager
  - component
  - secondary
  - identifier
  - int32
readonly: true
---

# IFeatureManager.ComponentSecondaryIdentifier

Gets the secondary element(s) displayed for the components in the FeatureManager design tree.

## Signature

```csharp
System.Int32 ComponentSecondaryIdentifier {get;}
```
## Parameters

None.

## Return Value

Secondary identifier(s) as defined by swComponentIdentifier_e

## Remarks

This property works in both SOLIDWORKS Design and
SOLIDWORKS Design Augmented
.

## See Also

- `IFeatureManager.SetComponentIdentifiers`