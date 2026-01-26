---
type: method
interface: IAssemblyDoc
member: IGetFeatureScope
returns: Component2
parameters:
  -
    name: FeatureIn
    type: Feature
    description: IFeature
  -
    name: NumComponents
    type: System.Int32
    description: Number of components affected by this feature
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
  - IAssemblyDoc.UpdateFeatureScope
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - feature
  - scope
  - igetfeaturescope
  - assembly
  - doc
  - num
  - components
  - int32
  - component2
---

# IAssemblyDoc.IGetFeatureScope

Gets the components affected by this feature.

## Signature

```csharp
Component2 IGetFeatureScope( 
   Feature
FeatureIn
,
   System.Int32
NumComponents
)
```
## Parameters

- `FeatureIn` (Feature): IFeature
- `NumComponents` (System.Int32): Number of components affected by this feature

## Return Value

Array of components of size NumComponents

## Remarks

Feature scope information is only provided if the assembly is opened in its own window.
COM users must call
IAssemblyDoc::GetFeatureScopeCount
before calling this method.
This method gets both the components affected and potentially affected by this feature. Thus, not all of the components in this list are necessarily affected by this feature.

## See Also

- `IAssemblyDoc.AddToFeatureScope`
- `IAssemblyDoc.GetFeatureScope`
- `IAssemblyDoc.GetFeatureScopeCount`
- `IAssemblyDoc.UpdateFeatureScope`