---
type: method
interface: IFeatureManager
member: FeatureLocalSketchDrivenPattern
returns: Feature
parameters:
  -
    name: ReferencePoint
    type: System.Int32
    description: Type of selected reference point as defined in swLocalSketchPatternReferencePoint_e (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - featurelocalsketchdrivenpattern
  - ifeaturemanager
  - feature
  - manager
  - local
  - sketch
  - driven
  - pattern
  - reference
  - point
  - int32
---

# IFeatureManager.FeatureLocalSketchDrivenPattern

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ILocalSketchPatternFeatureData.

## Signature

```csharp
Feature FeatureLocalSketchDrivenPattern( 
   System.Int32
ReferencePoint
)
```
## Parameters

- `ReferencePoint` (System.Int32): Type of selected reference point as defined in swLocalSketchPatternReferencePoint_e (see Remarks )

## Return Value

Local sketch pattern feature

## Remarks

To
select
...
Use a mark of...
Components to pattern
1
Sketch to define the pattern
16
Reference point for ReferencePoint
NOTE:
If ReferencePoint is set to swLocalSketchPatternReferencePoint_e.swLocalSketchPatternSelectedPoint, then the selected reference point must be a vertex.
32