---
type: method
interface: IPartDoc
member: FeatureById
returns: System.Object
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
  - IPartDoc.FeatureByName
  - IPartDoc.IFeatureById
  - IPartDoc.IFeatureByName
keywords:
  - feature
  - see
  - also
  - ifeature
  - id
  - featurebyid
  - ipartdoc
  - part
  - doc
  - int32
  - object
---

# IPartDoc.FeatureById

Gets the feature with the specified ID in the part.

## Signature

```csharp
System.Object FeatureById( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): ID of feature

## Return Value

Feature

## See Also

- `IPartDoc.FeatureByName`
- `IPartDoc.IFeatureById`
- `IPartDoc.IFeatureByName`