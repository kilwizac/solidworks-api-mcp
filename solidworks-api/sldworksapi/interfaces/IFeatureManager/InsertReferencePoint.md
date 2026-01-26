---
type: method
interface: IFeatureManager
member: InsertReferencePoint
returns: System.Object
parameters:
  -
    name: NRefPointType
    type: System.Int32
    description: Type of reference point as defined by swRefPointType_e
  -
    name: NRefPointAlongCurveType
    type: System.Int32
    description: Distance, percentage, or evenly distributed as defined by swRefPointAlongCurveType_e
  -
    name: DDistance_or_Percent
    type: System.Double
    description: Distance at which to create the reference point on the selected entities or percentage of the length of the selected entities at which to create the reference point if NRefPointAlongCurveType is swRefPointAlongCurveDistance or swRefPointAlongCurvePercentage, respectively
  -
    name: NumberOfRefPoints
    type: System.Int32
    description: Number of reference points to create and evenly distribute on the selected entities if swRefPointAlongCurveType is swRefPointAlongCurveEvenlyDistributed
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.EditReferencePoint
  - IFeatureManager.IInsertReferencePoint
  - IRefPointFeatureData
keywords:
  - reference
  - points
  - see
  - irefpoint
  - irefpointfeaturedata
  - interfaces
  - insertreferencepoint
  - ifeaturemanager
  - feature
  - manager
  - insert
  - point
  - ref
  - type
  - int32
  - along
  - curve
  - distance
  - percent
  - double
  - number
  - object
  - vba
---

# IFeatureManager.InsertReferencePoint

Creates the geometry for the reference points based on any of these selected entities: edges, faces, planes, vertices, or sketch geometry.

## Signature

```csharp
System.Object InsertReferencePoint( 
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
- `NRefPointAlongCurveType` (System.Int32): Distance, percentage, or evenly distributed as defined by swRefPointAlongCurveType_e
- `DDistance_or_Percent` (System.Double): Distance at which to create the reference point on the selected entities or percentage of the length of the selected entities at which to create the reference point if NRefPointAlongCurveType is swRefPointAlongCurveDistance or swRefPointAlongCurvePercentage, respectively
- `NumberOfRefPoints` (System.Int32): Number of reference points to create and evenly distribute on the selected entities if swRefPointAlongCurveType is swRefPointAlongCurveEvenlyDistributed

## Return Value

Pointer to the IFeature object

## Remarks

This method creates one or more reference point features and adds them to the FeatureManager design tree. If the reference point feature is not created, a NULL value is returned.
The NumberOfRefPoints argument must contain a value of 1 to successfully create one reference point feature.

## Examples

- Insert Reference Points (VBA) (Insert_Reference_Points_Example_VB.htm)

## See Also

- `IFeatureManager.EditReferencePoint`
- `IFeatureManager.IInsertReferencePoint`
- `IRefPointFeatureData`