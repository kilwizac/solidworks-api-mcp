---
type: method
interface: IFeatureManager
member: FeatureFillet2
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet options as defined in swFeatureFilletOptions_e
  -
    name: R1
    type: System.Double
    description: Uniform radius of the fillet; valid only if: Ftyp != swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: Rho
    type: System.Double
    description: Value that determines the conic shape of the fillet: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e .swFeatureFilletConicRho (see Remarks ) Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Circular radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletCircular
  -
    name: Ftyp
    type: System.Int32
    description: Type of fillet as defined in swFeatureFilletType_e (see Remarks )
  -
    name: OverflowType
    type: System.Int32
    description: Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
  -
    name: ConicRhoType
    type: System.Int32
    description: Conic fillet profile type as defined in swFeatureFilletProfileType_e
  -
    name: Radii
    type: System.Object
    description: Array containing the radii for the variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: RhoArr
    type: System.Object
    description: Array of Rho values for the specified ConicRhoType for the variable radius fillet ; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: SetBackDistances
    type: System.Object
    description: Array containing setback distances along the fillet edge
  -
    name: PointRadiusArray
    type: System.Object
    description: Array containing radii at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius
  -
    name: PointRhoArray
    type: System.Object
    description: Array of Rho values for the specified ConicRhoType at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertMakeCorner
  - IFeatureManager.FilletXpertRemove
  - IFeatureManager.IFeatureFillet2
  - ISimpleFilletFeatureData2
  - IVariableFilletFeatureData2
keywords:
  - featurefillet2
  - ifeaturemanager
  - feature
  - manager
  - fillet2
  - options
  - int32
  - r1
  - double
  - rho
  - ftyp
  - overflow
  - type
  - conic
  - radii
  - object
  - arr
  - back
  - distances
  - point
  - radius
  - array
---

# IFeatureManager.FeatureFillet2

Obsolete. Superseded by IFeatureManager::FeatureFillet3.

## Signature

```csharp
System.Object FeatureFillet2( 
   System.Int32
Options
,
   System.Double
R1
,
   System.Double
Rho
,
   System.Int32
Ftyp
,
   System.Int32
OverflowType
,
   System.Int32
ConicRhoType
,
   System.Object
Radii
,
   System.Object
RhoArr
,
   System.Object
SetBackDistances
,
   System.Object
PointRadiusArray
,
   System.Object
PointRhoArray
)
```
## Parameters

- `Options` (System.Int32): Feature fillet options as defined in swFeatureFilletOptions_e
- `R1` (System.Double): Uniform radius of the fillet; valid only if: Ftyp != swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `Rho` (System.Double): Value that determines the conic shape of the fillet: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e .swFeatureFilletConicRho (see Remarks ) Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Circular radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletCircular
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e (see Remarks )
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
- `ConicRhoType` (System.Int32): Conic fillet profile type as defined in swFeatureFilletProfileType_e
- `Radii` (System.Object): Array containing the radii for the variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `RhoArr` (System.Object): Array of Rho values for the specified ConicRhoType for the variable radius fillet ; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `SetBackDistances` (System.Object): Array containing setback distances along the fillet edge
- `PointRadiusArray` (System.Object): Array containing radii at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius
- `PointRhoArray` (System.Object): Array of Rho values for the specified ConicRhoType at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius

## Return Value

IFeature

## Remarks

If the conic rho value specified in parameter, Rho, is not in the valid range, then this method replaces it with the closest value in the valid range. For example, 0.01 is replaced by 0.05, and 0.99 is replaced by 0.95.
Before calling this method to create...
You must...
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
Call IModelDocExtension::SelectByID2 with Mark = 1 to select the edges to fillet.
Call IModelDocExtension::SelectByID2 with Mark = 256 to select the control point references along the length of the selected edge; one control point reference for each radius in PointRadiusArray.
Specify Ftyp with
swFeatureFilletType_e
.swFeatureFilletType_VariableRadius.
Specify multiple radii in Radii.
Specify multiple control point radii in PointRadiusArray.
Do not include
swFeatureFilletOptions_e
.swFilletUniformRadius in Options.
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
Conic fillets
See the SOLIDWORKS Help for details.

## See Also

- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertMakeCorner`
- `IFeatureManager.FilletXpertRemove`
- `IFeatureManager.IFeatureFillet2`
- `ISimpleFilletFeatureData2`
- `IVariableFilletFeatureData2`