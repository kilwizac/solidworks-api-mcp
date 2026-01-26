---
type: method
interface: IPartDoc
member: IFeatureByName
returns: Feature
parameters:
  -
    name: Name
    type: System.String
    description: Name of feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - parts
  - ui
related:
  - IPartDoc.FeatureById
  - IPartDoc.FeatureByName
  - IPartDoc.IFeatureById
keywords:
  - feature
  - see
  - also
  - ifeature
  - name
  - ifeaturebyname
  - ipartdoc
  - part
  - doc
  - string
---

# IPartDoc.IFeatureByName

Gets the named feature in the part.

## Signature

```csharp
Feature IFeatureByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of feature

## Return Value

Feature

## See Also

- `IPartDoc.FeatureById`
- `IPartDoc.FeatureByName`
- `IPartDoc.IFeatureById`