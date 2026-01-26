---
type: method
interface: IFeatureManager
member: SetNetBlendCurveData
returns: Feature
parameters:
  -
    name: Direction
    type: System.Int16
    description: 0 = Direction 1 1 = Direction 2
  -
    name: CurveIndex
    type: System.Int16
    description: Index of curve in the specified direction
  -
    name: TangentType
    type: System.Int16
    description: Type of tangency as defined in swTangencyType_e
  -
    name: SignedDraftAngle
    type: System.Double
    description: Draft angle
  -
    name: SignedTangentLength
    type: System.Double
    description: Tangent length
  -
    name: TangentLengthApplyAll
    type: System.Boolean
    description: True if the tangent length applies to all curves, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertNetBlend
  - IFeatureManager.SetNetBlendDirectionData
keywords:
  - boundary
  - surface
  - feature
  - see
  - also
  - ifeature
  - isurface
  - setnetblendcurvedata
  - ifeaturemanager
  - manager
  - net
  - blend
  - curve
  - data
  - direction
  - int16
  - index
  - tangent
  - type
  - signed
  - draft
  - angle
  - double
  - length
  - apply
  - all
  - boolean
  - insert
  - vba
  - vb
---

# IFeatureManager.SetNetBlendCurveData

Sets the data for a curve for this boundary feature or boundary surface feature.

## Signature

```csharp
Feature SetNetBlendCurveData( 
   System.Int16
Direction
,
   System.Int16
CurveIndex
,
   System.Int16
TangentType
,
   System.Double
SignedDraftAngle
,
   System.Double
SignedTangentLength
,
   System.Boolean
TangentLengthApplyAll
)
```
## Parameters

- `Direction` (System.Int16): 0 = Direction 1 1 = Direction 2
- `CurveIndex` (System.Int16): Index of curve in the specified direction
- `TangentType` (System.Int16): Type of tangency as defined in swTangencyType_e
- `SignedDraftAngle` (System.Double): Draft angle
- `SignedTangentLength` (System.Double): Tangent length
- `TangentLengthApplyAll` (System.Boolean): True if the tangent length applies to all curves, false if not

## Return Value

Feature

## Remarks

You must use this method to set the data for each curve in a boundary feature or boundary surface feature.

## Examples

- Insert Boundary Surface Feature (VBA) (Insert_Boundary_Surface_Feature_Example_VB.htm)
- Insert Boundary Feature (C#) (Insert_Boundary_Feature_Example_CSharp.htm)
- Insert Boundary Feature (VB.NET) (Insert_Boundary_Feature_Example_VBNET.htm)
- Insert Boundary Feature (VBA) (Insert_Boundary_Feature_Example_VB.htm)

## See Also

- `IFeatureManager.InsertNetBlend`
- `IFeatureManager.SetNetBlendDirectionData`