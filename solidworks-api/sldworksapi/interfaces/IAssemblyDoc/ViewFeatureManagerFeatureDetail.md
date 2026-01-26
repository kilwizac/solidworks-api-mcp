---
type: method
interface: IAssemblyDoc
member: ViewFeatureManagerFeatureDetail
returns: void
parameters:
  -
    name: Detail
    type: System.Boolean
    description: True to show feature detail, false to hide it
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related:
  - IAssemblyDoc.ViewFeatureManagerByDependencies
  - IAssemblyDoc.ViewFeatureManagerByFeatures
keywords:
  - viewfeaturemanagerfeaturedetail
  - iassemblydoc
  - assembly
  - doc
  - view
  - feature
  - manager
  - detail
  - boolean
  - void
---

# IAssemblyDoc.ViewFeatureManagerFeatureDetail

Obsolete. Superseded by IFeatureManager::ShowFeatureDetails.

## Signature

```csharp
void ViewFeatureManagerFeatureDetail( 
   System.Boolean
Detail
)
```
## Parameters

- `Detail` (System.Boolean): True to show feature detail, false to hide it

## Return Value

Unknown.

## Remarks

This method affects the FeatureManager design tree view of the current configuration of the assembly. It does not affect other configurations.

## See Also

- `IAssemblyDoc.ViewFeatureManagerByDependencies`
- `IAssemblyDoc.ViewFeatureManagerByFeatures`