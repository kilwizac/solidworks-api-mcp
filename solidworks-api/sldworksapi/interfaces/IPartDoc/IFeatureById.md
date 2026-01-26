---
type: method
interface: IPartDoc
member: IFeatureById
returns: Feature
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of feature
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
  - IPartDoc.IFeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - id
  - ifeaturebyid
  - ipartdoc
  - part
  - doc
  - int32
---

# IPartDoc.IFeatureById

Gets the feature with the specified ID in the part.

## Signature

```csharp
Feature IFeatureById( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): ID of feature

## Return Value

Feature

## See Also

- `IPartDoc.FeatureById`
- `IPartDoc.FeatureByName`
- `IPartDoc.IFeatureByName`