---
type: method
interface: IAssemblyDoc
member: UpdateFeatureScope
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related:
  - IAssemblyDoc.AddToFeatureScope
  - IAssemblyDoc.GetFeatureScope
  - IAssemblyDoc.GetFeatureScopeCount
  - IAssemblyDoc.RemoveFromFeatureScope
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - feature
  - scope
  - updatefeaturescope
  - assembly
  - doc
  - update
  - void
---

# IAssemblyDoc.UpdateFeatureScope

Updates the feature scope and rebuilds the currently selected assembly feature.

## Signature

```csharp
void UpdateFeatureScope()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

You can use assembly features to create a feature that affects multiple components in an assembly. For example, if you need a hole through two blocks to bolt them together, you can create a hole as an assembly feature that goes through both of the blocks.

## See Also

- `IAssemblyDoc.AddToFeatureScope`
- `IAssemblyDoc.GetFeatureScope`
- `IAssemblyDoc.GetFeatureScopeCount`
- `IAssemblyDoc.RemoveFromFeatureScope`