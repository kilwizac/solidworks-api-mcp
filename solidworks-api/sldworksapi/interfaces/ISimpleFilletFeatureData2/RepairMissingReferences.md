---
type: method
interface: ISimpleFilletFeatureData2
member: RepairMissingReferences
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - repairmissingreferences
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - repair
  - missing
  - references
  - void
---

# ISimpleFilletFeatureData2.RepairMissingReferences

Finds missing references in this fillet/chamfer and reassigns them to new edges.

## Signature

```csharp
void RepairMissingReferences()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If you delete a feature that this fillet or chamfer is referencing and then create a similar feature with the same geometry, the references do not reattach. The missing references appear in the
Items To Fillet
list box of the Fillet PropertyManager, but finding the valid edges to reattach is difficult. Call this method to find all missing references and reassign them to new edges.