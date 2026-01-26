---
type: method
interface: IFeatureManager
member: FeatureFillet
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet options as defined in swFeatureFilletOptions_e
  -
    name: R1
    type: System.Double
    description: Radius; valid only if: Ftyp is not swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options is set with swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: Ftyp
    type: System.Int32
    description: Type of fillet as defined in swFeatureFilletType_e (see Remarks )
  -
    name: OverflowType
    type: System.Int32
    description: Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
  -
    name: Radii
    type: System.Object
    description: Array containing the radii for the variable radius fillet; valid only if: Ftyp is set to swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options is set with swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options is not set with swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: SetBackDistances
    type: System.Object
    description: Array containing setback distances for the fillet along the edge
  -
    name: PointRadiusArray
    type: System.Object
    description: Array containing control point radii at various points along the length of the edge; valid only if Ftyp is set to swFeatureFilletType_e .swFeatureFilletType_VariableRadius
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertRemove
  - IFeatureManager.IFeatureFillet
  - ISimpleFilletFeatureData2
  - IVariableFilletFeatureData2
keywords:
  - featurefillet
  - ifeaturemanager
  - feature
  - manager
  - fillet
  - options
  - int32
  - r1
  - double
  - ftyp
  - overflow
  - type
  - radii
  - object
  - back
  - distances
  - point
  - radius
  - array
---

# IFeatureManager.FeatureFillet

Obsolete. Superseded by IFeatureManager::FeatureFillet2.

## Signature

```csharp
System.Object FeatureFillet( 
   System.Int32
Options
,
   System.Double
R1
,
   System.Int32
Ftyp
,
   System.Int32
OverflowType
,
   System.Object
Radii
,
   System.Object
SetBackDistances
,
   System.Object
PointRadiusArray
)
```
## Parameters

- `Options` (System.Int32): Feature fillet options as defined in swFeatureFilletOptions_e
- `R1` (System.Double): Radius; valid only if: Ftyp is not swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options is set with swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e (see Remarks )
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
- `Radii` (System.Object): Array containing the radii for the variable radius fillet; valid only if: Ftyp is set to swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options is set with swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options is not set with swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `SetBackDistances` (System.Object): Array containing setback distances for the fillet along the edge
- `PointRadiusArray` (System.Object): Array containing control point radii at various points along the length of the edge; valid only if Ftyp is set to swFeatureFilletType_e .swFeatureFilletType_VariableRadius

## Return Value

IFeature

## Remarks

Before calling this method to create...
Do this...
Simple fillets
Call
IModelDocExtension::SelectByID2
with Mark = 1 to select the edges to fillet.
Specify Ftyp with
swFeatureFilletType_e
.swFeatureFilletType_Simple.
Face blend fillets
Call IModelDocExtension::SelectByID2 with:
Mark = 2 to select the first set of faces.
Mark = 4 to select the second set of faces.
Specify Ftyp with
swFeatureFilletType_e
.swFeatureFilletType_Face.
Variable radius fillets
Call
IModelDocExtension::SelectByID2
with Mark = 1 to select the edges to fillet.
Call IModelDocExtension::SelectByID2 with Mark = 256 to select the control point references along the length of the selected edge, one control point reference for each radius in PointRadiusArray.
Specify Ftyp with
swFeatureFilletType_e
.swFeatureFilletType_VariableRadius.
Specify multiple radii in Radii.
Specify multiple control point radii in PointRadiusArray.
Do not set the Options parameter to
swFeatureFilletOptions_e
.swFilletUniformRadius.
Full-round fillets
Call IModelDocExtension::SelectByID2 with:
Mark = 2 to select the first set of side faces.
Mark = 512 to select the set of center faces.
Mark = 4 to select the second set of side faces.
Specify Ftyp with
swFeatureFilletType_e
.swFeatureFilletType_FullRound.
Setback fillets
See the SOLIDWORKS Help for details.

## See Also

- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertRemove`
- `IFeatureManager.IFeatureFillet`
- `ISimpleFilletFeatureData2`
- `IVariableFilletFeatureData2`