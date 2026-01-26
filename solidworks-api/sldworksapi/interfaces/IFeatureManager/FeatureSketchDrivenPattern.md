---
type: method
interface: IFeatureManager
member: FeatureSketchDrivenPattern
returns: Feature
parameters:
  -
    name: UseCentroid
    type: System.Boolean
    description: True to use a centroid as the reference point, false to not
  -
    name: BGeomPatt
    type: System.Boolean
    description: True to pattern using only the feature geometry, false to pattern each instance
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - featuresketchdrivenpattern
  - ifeaturemanager
  - feature
  - manager
  - sketch
  - driven
  - pattern
  - use
  - centroid
  - boolean
  - geom
  - patt
---

# IFeatureManager.FeatureSketchDrivenPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ISketchPatternFeatureData.

## Signature

```csharp
Feature FeatureSketchDrivenPattern( 
   System.Boolean
UseCentroid
,
   System.Boolean
BGeomPatt
)
```
## Parameters

- `UseCentroid` (System.Boolean): True to use a centroid as the reference point, false to not
- `BGeomPatt` (System.Boolean): True to pattern using only the feature geometry, false to pattern each instance

## Return Value

Pointer to the IFeature object

## Remarks

Before calling this method, select the required entities using the proper selection marks:
features = 4
points = 32
sketches = 64
faces = 128
bodies = 256
See
IModelDocExtension::SelectByID2
for details about selecting input entities. See the SOLIDWORKS Help for more information about sketch-driven patterns.