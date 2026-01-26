---
type: method
interface: IAssemblyDoc
member: GetFeatureScope
returns: System.Object
parameters:
  -
    name: FeatureIn
    type: Feature
    description: IFeature
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
  - IAssemblyDoc.GetFeatureScopeCount
  - IAssemblyDoc.IGetFeatureScope
  - IAssemblyDoc.UpdateFeatureScope
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - feature
  - scope
  - getfeaturescope
  - assembly
  - doc
  - object
---

# IAssemblyDoc.GetFeatureScope

Gets the components affected by this feature.

## Signature

```csharp
System.Object GetFeatureScope( 
   Feature
FeatureIn
)
```
## Parameters

- `FeatureIn` (Feature): IFeature

## Return Value

Array of components affected by this feature

## Remarks

Feature scope information is only provided if the assembly is opened in its own window.
This method gets both the components affected and potentially affected by this feature. Thus, not all of the components in this list are necessarily affected by this feature.

## See Also

- `IAssemblyDoc.AddToFeatureScope`
- `IAssemblyDoc.GetFeatureScopeCount`
- `IAssemblyDoc.IGetFeatureScope`
- `IAssemblyDoc.UpdateFeatureScope`