---
type: method
interface: IAssemblyDoc
member: IFeatureByName
returns: Feature
parameters:
  -
    name: Name
    type: System.String
    description: Name of the feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related:
  - IAssemblyDoc.FeatureByName
keywords:
  - ifeaturebyname
  - iassemblydoc
  - assembly
  - doc
  - feature
  - name
  - string
---

# IAssemblyDoc.IFeatureByName

Returns the IFeature object for the named feature in the assembly.

## Signature

```csharp
Feature IFeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the feature

## Return Value

IFeature

## See Also

- `IAssemblyDoc.FeatureByName`