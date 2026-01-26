---
type: method
interface: IAssemblyDoc
member: GetFeatureScopeCount
returns: System.Int32
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
  - IAssemblyDoc.GetFeatureScope
  - IAssemblyDoc.IGetFeatureScope
  - IAssemblyDoc.RemoveFromFeatureScope
  - IAssemblyDoc.UpdateFeatureScope
keywords:
  - feature
  - scope
  - assemblies
  - see
  - also
  - iassemblydoc
  - getfeaturescopecount
  - assembly
  - doc
  - count
  - int32
---

# IAssemblyDoc.GetFeatureScopeCount

Gets the number of components affected by this feature.

## Signature

```csharp
System.Int32 GetFeatureScopeCount( 
   Feature
FeatureIn
)
```
## Parameters

- `FeatureIn` (Feature): IFeature

## Return Value

Number of components affected by this feature

## Remarks

Call this method before calling
IAssemblyDoc::IGetFeatureScope
.

## See Also

- `IAssemblyDoc.AddToFeatureScope`
- `IAssemblyDoc.GetFeatureScope`
- `IAssemblyDoc.IGetFeatureScope`
- `IAssemblyDoc.RemoveFromFeatureScope`
- `IAssemblyDoc.UpdateFeatureScope`