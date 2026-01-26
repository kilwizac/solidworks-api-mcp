---
type: method
interface: IFeatureManager
member: InsertRefPlane
returns: System.Object
parameters:
  -
    name: FirstConstraint
    type: System.Int32
    description: First constraint as defined in swRefPlaneReferenceConstraints_e
  -
    name: FirstConstraintAngleOrDistance
    type: System.Double
    description: Angle or distance of the first constraint
  -
    name: SecondConstraint
    type: System.Int32
    description: Second constraint as defined in swRefPlaneReferenceConstraints_e
  -
    name: SecondConstraintAngleOrDistance
    type: System.Double
    description: Angle or distance of the second constraint
  -
    name: ThirdConstraint
    type: System.Int32
    description: Third constraint as defined in swRefPlaneReferenceConstraints_e
  -
    name: ThirdConstraintAngleOrDistance
    type: System.Double
    description: Angle or distance of the third constraint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlane
  - IRefPlaneFeatureData
keywords:
  - reference
  - geometry
  - planes
  - plane
  - see
  - irefplane
  - irefplanefeaturedata
  - interfaces
  - also
  - create
  - refplane
  - insertrefplane
  - ifeaturemanager
  - feature
  - manager
  - insert
  - ref
  - first
  - constraint
  - int32
  - angle
  - distance
  - double
  - second
  - third
  - object
  - vb
  - net
  - vba
  - fill
  - surface
---

# IFeatureManager.InsertRefPlane

Inserts a constraint-based reference plane using the selected reference entities.

## Signature

```csharp
System.Object InsertRefPlane( 
   System.Int32
FirstConstraint
,
   System.Double
FirstConstraintAngleOrDistance
,
   System.Int32
SecondConstraint
,
   System.Double
SecondConstraintAngleOrDistance
,
   System.Int32
ThirdConstraint
,
   System.Double
ThirdConstraintAngleOrDistance
)
```
## Parameters

- `FirstConstraint` (System.Int32): First constraint as defined in swRefPlaneReferenceConstraints_e
- `FirstConstraintAngleOrDistance` (System.Double): Angle or distance of the first constraint
- `SecondConstraint` (System.Int32): Second constraint as defined in swRefPlaneReferenceConstraints_e
- `SecondConstraintAngleOrDistance` (System.Double): Angle or distance of the second constraint
- `ThirdConstraint` (System.Int32): Third constraint as defined in swRefPlaneReferenceConstraints_e
- `ThirdConstraintAngleOrDistance` (System.Double): Angle or distance of the third constraint

## Return Value

Reference plane

## Remarks

Before calling this method, you must have selected the reference entities using these marks with
IModelDocExtension::SelectByID2
:
0 = First reference entity
1 = Second reference entity
2 = Third reference entity

## Examples

- Insert Reference Plane (C#) (Insert_Reference_Plane_Example_CSharp.htm)
- Insert Reference Plane (VB.NET) (Insert_Reference_Plane_Example_VBNET.htm)
- Insert Reference Plane (VBA) (Insert_Reference_Plane_Example_VB.htm)
- Insert Fill-surface Feature (C#) (Insert_Fill-surface_Feature_Example_CSharp.htm)
- Insert Fill-surface Feature (VB.NET) (Insert_Fill-surface_Feature_Example_VBNET.htm)
- Insert Fill-surface Feature (VBA) (Insert_Fill-surface_Feature_Example_VB.htm)

## See Also

- `IRefPlane`
- `IRefPlaneFeatureData`