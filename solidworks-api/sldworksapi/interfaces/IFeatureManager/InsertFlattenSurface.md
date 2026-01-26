---
type: method
interface: IFeatureManager
member: InsertFlattenSurface
returns: Feature
parameters:
  -
    name: AccuracyFactor
    type: System.Int32
    description: 10 >= Accuracy of flattened triangle mesh >= 1; 1 is highest accuracy
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISurfaceFlattenFeatureData
keywords:
  - insertflattensurface
  - ifeaturemanager
  - feature
  - manager
  - insert
  - flatten
  - surface
  - accuracy
  - factor
  - int32
---

# IFeatureManager.InsertFlattenSurface

Obsolete. Superseded by IFeatureManager::InsertFlattenSurface2.

## Signature

```csharp
Feature InsertFlattenSurface( 
   System.Int32
AccuracyFactor
)
```
## Parameters

- `AccuracyFactor` (System.Int32): 10 >= Accuracy of flattened triangle mesh >= 1; 1 is highest accuracy

## Return Value

Surface-flatten feature

## Remarks

Before calling this method, select...
By calling
IModelDocExtension::SelectByID2
with Mark...
Faces or surfaces to flatten
1
Anchor point from which to flatten
16
Edges to guide the shape and length of the flattened surface
2

## See Also

- `ISurfaceFlattenFeatureData`