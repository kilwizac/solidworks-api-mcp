---
type: method
interface: IComponent2
member: FeatureByName
returns: Feature
parameters:
  -
    name: Name
    type: System.String
    description: Name of the feature to retrieve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - featurebyname
  - icomponent2
  - component2
  - string
---

# IComponent2.FeatureByName

Gets the specified feature for this component.

## Signature

```csharp
Feature FeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the feature to retrieve

## Return Value

Pointer to the IFeature object