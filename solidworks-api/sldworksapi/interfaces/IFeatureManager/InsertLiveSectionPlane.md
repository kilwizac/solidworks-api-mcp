---
type: method
interface: IFeatureManager
member: InsertLiveSectionPlane
returns: Feature
parameters:
  -
    name: Type
    type: System.Int16
    description: Not used. Specify any integer value.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.MoveRotateLiveSectionPlane
keywords:
  - live
  - section
  - planes
  - see
  - also
  - irefplane
  - insertlivesectionplane
  - ifeaturemanager
  - feature
  - manager
  - insert
  - plane
  - type
  - int16
---

# IFeatureManager.InsertLiveSectionPlane

Inserts a Live Section Plane using the selected plane or planar face.

## Signature

```csharp
Feature InsertLiveSectionPlane( 
   System.Int16
Type
)
```
## Parameters

- `Type` (System.Int16): Not used. Specify any integer value.

## Return Value

Feature

## See Also

- `IFeatureManager.MoveRotateLiveSectionPlane`