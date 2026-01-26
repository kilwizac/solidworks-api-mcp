---
type: method
interface: IFeatureManager
member: FeatureFillet3
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet options as defined in swFeatureFilletOptions_e (see Remarks )
  -
    name: R1
    type: System.Double
    description: Uniform radius of the symmetric fillet; valid only if: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletUniformRadius - or - Distance 1 radius of the asymmetric fillet; valid only if: Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric
  -
    name: R2
    type: System.Double
    description: Distance 2 radius of the asymmetric fillet; valid only if: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric
  -
    name: Rho
    type: System.Double
    description: Value that determines the conic rho or radius of the fillet: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius (see Remarks )
  -
    name: Ftyp
    type: System.Int32
    description: Type of fillet as defined in swFeatureFilletType_e (see Remarks )
  -
    name: OverflowType
    type: System.Int32
    description: Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e (see Remarks )
  -
    name: ConicRhoType
    type: System.Int32
    description: Fillet cross-section profile as defined in swFeatureFilletProfileType_e ; valid only if Options does not include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous (see Remarks )
  -
    name: Radii
    type: System.Object
    description: Array containing the radii for selected edges for the symmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius - or - Array containing the Distance 1 radii for selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
  -
    name: Dist2Arr
    type: System.Object
    description: Array containing the Distance 2 radii for selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
  -
    name: RhoArr
    type: System.Object
    description: Array of conic rho or radius values for the specified ConicRhoType for selected edges for the variable radius fillet ; valid only if: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius (see Remarks )
  -
    name: SetBackDistances
    type: System.Object
    description: Array assigning setback distances on edges meeting at a selected fillet corner (see Remarks )
  -
    name: PointRadiusArray
    type: System.Object
    description: Array containing control point radii along the lengths of the selected edges for the symmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletVarRadiusType - or - Array containing Distance 1 control point radii along the lengths of the selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
  -
    name: PointDist2Array
    type: System.Object
    description: Array containing Distance 2 control point radii along the lengths of the selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
  -
    name: PointRhoArray
    type: System.Object
    description: Array of conic rho or radius values for the specified ConicRhoType at various control points along the lengths of the selected edges for the variable radius fillet; valid only if: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertMakeCorner
  - IFeatureManager.FilletXpertRemove
keywords:
  - featurefillet3
  - ifeaturemanager
  - feature
  - manager
  - fillet3
  - options
  - int32
  - r1
  - double
  - r2
  - rho
  - ftyp
  - overflow
  - type
  - conic
  - radii
  - object
  - dist2
  - arr
  - back
  - distances
  - point
  - radius
  - array
  - create
  - variable
  - asymmetric
  - elliptical
  - fillet
  - vba
  - vb
  - net
---

# IFeatureManager.FeatureFillet3

Creates a fillet feature for selected edges and control point references.

## Signature

```csharp
System.Object FeatureFillet3( 
   System.Int32
Options
,
   System.Double
R1
,
   System.Double
R2
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
Dist2Arr
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
PointDist2Array
,
   System.Object
PointRhoArray
)
```
## Parameters

- `Options` (System.Int32): Feature fillet options as defined in swFeatureFilletOptions_e (see Remarks )
- `R1` (System.Double): Uniform radius of the symmetric fillet; valid only if: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletUniformRadius - or - Distance 1 radius of the asymmetric fillet; valid only if: Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric
- `R2` (System.Double): Distance 2 radius of the asymmetric fillet; valid only if: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric
- `Rho` (System.Double): Value that determines the conic rho or radius of the fillet: Ftyp != swFeatureFilletType_e.swFeatureFilletType_VariableRadius Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius (see Remarks )
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e (see Remarks )
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e (see Remarks )
- `ConicRhoType` (System.Int32): Fillet cross-section profile as defined in swFeatureFilletProfileType_e ; valid only if Options does not include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous (see Remarks )
- `Radii` (System.Object): Array containing the radii for selected edges for the symmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius - or - Array containing the Distance 1 radii for selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
- `Dist2Arr` (System.Object): Array containing the Distance 2 radii for selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
- `RhoArr` (System.Object): Array of conic rho or radius values for the specified ConicRhoType for selected edges for the variable radius fillet ; valid only if: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius (see Remarks )
- `SetBackDistances` (System.Object): Array assigning setback distances on edges meeting at a selected fillet corner (see Remarks )
- `PointRadiusArray` (System.Object): Array containing control point radii along the lengths of the selected edges for the symmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletVarRadiusType - or - Array containing Distance 1 control point radii along the lengths of the selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
- `PointDist2Array` (System.Object): Array containing Distance 2 control point radii along the lengths of the selected edges for the asymmetric variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e.swFeatureFilletAsymmetric (see Remarks )
- `PointRhoArray` (System.Object): Array of conic rho or radius values for the specified ConicRhoType at various control points along the lengths of the selected edges for the variable radius fillet; valid only if: Conic rho value [0.05, 0.95], if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Ftyp = swFeatureFilletType_e.swFeatureFilletType_VariableRadius (see Remarks )

## Return Value

IFeature

## Remarks

As of SOLIDWORKS 2020, this method is obsolete for creating:
constant radius fillets
offset face chamfers
face fillets
face-face chamfers
full round fillets
partial fillets
partial chamfers
To create the fillet/chamfers above, use
IFeatureManager::CreateDefinition
,
IFeatureManager::CreateFeature
, IPartialEdgeFilletData, and
ISimpleFilletFeatureData2
.
All of the parameter arrays of this method scale with the number of selected edges to fillet. Take care to populate and order the arrays meaningfully, or this method will fail.
If the conic rho values of Rho, RhoArray, or PointRhoArray are not in the valid range, then this method replaces them with the closest value in the valid range. For example, 0.01 is replaced by 0.05, and 0.99 is replaced by 0.95.
To create...
You must...
Variable radius fillets
Call
IModelDocExtension::SelectByID2
with Mark = 1 to select the edges to fillet.
Call IModelDocExtension::SelectByID2 with Mark = 256 to select the control point references along the lengths of the selected edges; select one control point reference for each radius in PointRadiusArray.
Specify Ftyp with swFeatureFilletType_e.swFeatureFilletType_VariableRadius.
(Optional) Specify OverflowType.
(Optional) Include swFeatureFilletOptions_e.swFeatureFilletVarRadiusType in Options.
(Optional) Include swFeatureFilletOptions_e.swFeatureFilletPropagate in Options.
(Optional) Include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous in Options.
(Optional) If Options does not include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous, then include swFeatureFilletOptions_e.swFeatureFilletCornerType in Options.
(Optional) Include swFeatureFilletOptions_e.swFeatureFilletKeepFeatures in Options.
If a
symmetric fillet
:
- If Options does not include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous, then specify ConicRhoType with swFeatureProfileType_e.swFeatureFilletCircular, swFeatureFilletConicRadius, or swFeatureFilletConicRho.
- Specify Radii.
- If ConicRhoType is not swFeatureFilletProfileType_e.swFeatureFilletCircular, then specify RhoArr with conic rho or radius values.
- Specify PointRadiusArray with multiple control point radii, one radius for each control point reference selected in step 2.
- If ConicRhoType is not swFeatureFilletProfileType_e.swFeatureFilletCircular, then specify PointRhoArray with conic rho or radius values.
If an
asymmetric fillet
:
- If Options does not include swFeatureFilletOptions_e.swFeatureFilletCurvatureContinuous, then specify ConicRhoType with swFeatureProfileType_e.swFeatureFilletCircular or swFeatureFilletConicRho.
- Include swFeatureFilletOptions_e.swFeatureFilletAsymmetric in Options.
- Specify Radii with the Distance 1 radii.
- Specify Dist2Array with the Distance 2 radii.
- If ConicRhoType is not swFeatureFilletProfileType_e.swFeatureFilletCircular, then specify RhoArr with conic rho or radius values.
- Specify PointRadiusArray, one Distance 1 radius for each control point reference selected in step 2.
- Specify PointDist2Array, one Distance 2 radius for each control point reference selected in step 2.
- If ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRho, specify PointRhoArray with the conic rho values.
Setback fillets
Follow the instructions above to create a variable radius fillet.
Call IModelDocExtension::SelectByID2 with Mark = 0 to select the vertex of the fillet corner whose setback parameters you want to set.
Specify SetBackDistances and call this method.
- or -
Call this method.
Use the setback methods on
IVariableFilletFeatureData2
to set the setback distances from setback vertices of multiple fillet corners.
For more information, read the
Variable Size Fillets
topic in the SOLIDWORKS Design user-interface help.

## Examples

- Create Variable Radius Asymmetric Elliptical Fillet (VBA) (Create_Asymmetric_Elliptic_Fillets_Example_VB.htm)
- Create Variable Radius Asymmetric Elliptical Fillet (VB.NET) (Create_Asymmetric_Elliptic_Fillets_Example_VBNET.htm)
- Create Variable Radius Asymmetric Elliptical Fillet (C#) (Create_Asymmetric_Elliptic_Fillets_Example_CSharp.htm)

## See Also

- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertMakeCorner`
- `IFeatureManager.FilletXpertRemove`