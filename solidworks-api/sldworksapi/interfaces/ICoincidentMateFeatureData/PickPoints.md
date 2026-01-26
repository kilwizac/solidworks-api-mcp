---
type: property
interface: ICoincidentMateFeatureData
member: PickPoints
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - pickpoints
  - icoincidentmatefeaturedata
  - coincident
  - mate
  - feature
  - data
  - pick
  - points
  - object
readonly: null
---

# ICoincidentMateFeatureData.PickPoints

Gets or sets the pick points for the entities to mate in this coincident mate.

## Signature

```csharp
System.Object PickPoints {get; set;}
```
## Parameters

None.

## Return Value

Array of x, y, z-coordinates, one set for each mate entity in ICoincidentMateFeatureData::EntitiesToMate

## Remarks

Pick points define the position of the entities to mate. If no pick points are specified, then entities are mated using default pick points.
After you create this mate using the pick points for a given selection of ICoincidentMateFeatureData::EntitiesToMate, you cannot edit the pick points. If you want to use new pick points, then you must create an entirely new coincident mate with mate entities and pick points.
If you pre-select the mate entities by coordinates (e.g.,
IModelDocExtension::SelectByID2
), then you do not need to specify pick points.