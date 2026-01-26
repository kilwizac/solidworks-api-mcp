---
type: method
interface: IFeatureManager
member: EditReferencePoint
returns: System.Boolean
parameters:
  -
    name: NRefPointType
    type: System.Int32
    description: Type of reference point as defined by swRefPointType_e
  -
    name: NRefPointAlongCurveType
    type: System.Int32
    description: Type of reference point as defined by swRefPointType_e
  -
    name: DDistance_or_Percent
    type: System.Double
    description: Distance, percentage, or evenly distributed as defined by swRefPointAlongCurveType_e
  -
    name: NumberOfRefPoints
    type: System.Int32
    description: Distance at which to create the reference point on the selected entities or percentage of the length of the selected entities at which to create the reference point if NRefPointAlongCurveType is swRefPointAlongCurveDistance or swRefPointAlongCurvePercentage, respectively
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPointFeatureData
keywords:
  - reference
  - points
  - see
  - irefpoint
  - irefpointfeaturedata
  - interfaces
  - feature
  - also
  - ifeature
  - point
  - editreferencepoint
  - ifeaturemanager
  - manager
  - edit
  - ref
  - type
  - int32
  - along
  - curve
  - distance
  - percent
  - double
  - number
  - boolean
---

# IFeatureManager.EditReferencePoint

Edits the selected reference points.

## Signature

```csharp
System.Boolean EditReferencePoint( 
   System.Int32
NRefPointType
,
   System.Int32
NRefPointAlongCurveType
,
   System.Double
DDistance_or_Percent
,
   System.Int32
NumberOfRefPoints
)
```
## Parameters

- `NRefPointType` (System.Int32): Type of reference point as defined by swRefPointType_e
- `NRefPointAlongCurveType` (System.Int32): Type of reference point as defined by swRefPointType_e
- `DDistance_or_Percent` (System.Double): Distance, percentage, or evenly distributed as defined by swRefPointAlongCurveType_e
- `NumberOfRefPoints` (System.Int32): Distance at which to create the reference point on the selected entities or percentage of the length of the selected entities at which to create the reference point if NRefPointAlongCurveType is swRefPointAlongCurveDistance or swRefPointAlongCurvePercentage, respectively

## Return Value

True if the operation succeeds, false if not

## Remarks

A reference point is a feature. To programatically create a reference point feature, you can use
IFeatureManager::InsertReferencePoint
or
IFeatureManager::IInsertReferencePoint
.

## See Also

- `IRefPointFeatureData`