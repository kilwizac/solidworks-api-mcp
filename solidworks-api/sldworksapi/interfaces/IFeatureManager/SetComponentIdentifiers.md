---
type: method
interface: IFeatureManager
member: SetComponentIdentifiers
returns: System.Int32
parameters:
  -
    name: Primary
    type: System.Int32
    description: Component identifier as defined by swComponentIdentifier_e
  -
    name: Secondary
    type: System.Int32
    description: Component identifier(s) as defined by swComponentIdentifier_e
  -
    name: Tertiary
    type: System.Int32
    description: Component identifier(s) as defined by swComponentIdentifier_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.ComponentPrimaryIdentifier
  - IFeatureManager.ComponentSecondaryIdentifier
  - IFeatureManager.ComponentTertiaryIdentifier
keywords:
  - 3dexperience
  - solidwork
  - connected
  - setcomponentidentifiers
  - ifeaturemanager
  - feature
  - manager
  - component
  - identifiers
  - primary
  - int32
  - secondary
  - tertiary
---

# IFeatureManager.SetComponentIdentifiers

Allows you to specify the primary, ( secondary ), and &lt; tertiary &gt; elements to display for the components in the FeatureManager design tree.

## Signature

```csharp
System.Int32 SetComponentIdentifiers( 
   System.Int32
Primary
,
   System.Int32
Secondary
,
   System.Int32
Tertiary
)
```
## Parameters

- `Primary` (System.Int32): Component identifier as defined by swComponentIdentifier_e
- `Secondary` (System.Int32): Component identifier(s) as defined by swComponentIdentifier_e
- `Tertiary` (System.Int32): Component identifier(s) as defined by swComponentIdentifier_e

## Return Value

Result code as defined by swSetComponentIdentifierResult_e

## Remarks

This method:
Works in both SOLIDWORKS Design and
SOLIDWORKS Design Augmented
.
Is analogous to right-clicking on the top-level component in the FeatureManager design tree and selecting
Tree Display > Component Name and Description
.

## See Also

- `IFeatureManager.ComponentPrimaryIdentifier`
- `IFeatureManager.ComponentSecondaryIdentifier`
- `IFeatureManager.ComponentTertiaryIdentifier`