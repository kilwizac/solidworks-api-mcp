---
type: method
interface: IFeatureManager
member: InsertDeleteHoleForSurface
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - delete
  - holes
  - see
  - also
  - isimpleholefeaturedata2
  - iwizardholefeaturedata2
  - interfaces
  - insertdeleteholeforsurface
  - ifeaturemanager
  - feature
  - manager
  - insert
  - hole
  - surface
---

# IFeatureManager.InsertDeleteHoleForSurface

Inserts a Delete Hole feature for one or more selected hole edges on a surface.

## Signature

```csharp
Feature InsertDeleteHoleForSurface()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

Before calling this method, call
IModelDocExtension::SelectByID2
to select the hole edges to remove from the surface.