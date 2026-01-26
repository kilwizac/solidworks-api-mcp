---
type: method
interface: IFeatureManager
member: IFeatureFillet2
returns: Feature
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet options as defined in swFeatureFilletOptions_e
  -
    name: R1
    type: System.Double
    description: Unifiorm radius of the fillet; valid only if: Ftyp != swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
  -
    name: Rho
    type: System.Double
    description: Value that determines the conic shape of the fillet: Conic rho value, if ConicRhoType = swFeatureFilletProfileType_e .swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Circular radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletCircular
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
    name: NRadii
    type: System.Int32
    description: Number of elements in the Radii array
  -
    name: Radii
    type: System.Double
    description: In-process, unmanaged C++: Pointer to an array containing the radii for the variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: RhoArr
    type: System.Double
    description: In-process, unmanaged C++: Pointer to an array of conic shape values for the specified ConicRhoType for the variable radius fillet ; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SetbackDistCount
    type: System.Int32
    description: Number of elements in the SetBackDistances array
  -
    name: SetBackDistances
    type: System.Double
    description: In-process, unmanaged C++: Pointer to an array containing setback distances along the fillet edge VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PointCount
    type: System.Int32
    description: Number of elements in the PointRadiusArray and PointRhoArray arrays
  -
    name: PointRadiusArray
    type: System.Double
    description: In-process, unmanaged C++: Pointer to an array containing radii at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PointRhoArray
    type: System.Double
    description: In-process, unmanaged C++: Pointer to an array containing conic shape values for the specified ConicRhoType at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureFillet2
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertMakeCorner
  - IFeatureManager.FilletXpertRemove
  - ISimpleFilletFeatureData2
  - IVariableFilletFeatureData2
keywords:
  - fillets
  - conic
  - ifeaturefillet2
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
  - radii
  - arr
  - setback
  - dist
  - count
  - back
  - distances
  - point
  - radius
  - array
---

# IFeatureManager.IFeatureFillet2

Obsolete. Superseded by IFeatureManager::FeatureFillet3.

## Signature

```csharp
Feature IFeatureFillet2( 
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
   System.Int32
NRadii
,
   ref System.Double
Radii
,
   ref System.Double
RhoArr
,
   System.Int32
SetbackDistCount
,
   ref System.Double
SetBackDistances
,
   System.Int32
PointCount
,
   ref System.Double
PointRadiusArray
,
   ref System.Double
PointRhoArray
)
```
## Parameters

- `Options` (System.Int32): Feature fillet options as defined in swFeatureFilletOptions_e
- `R1` (System.Double): Unifiorm radius of the fillet; valid only if: Ftyp != swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletUniformRadius
- `Rho` (System.Double): Value that determines the conic shape of the fillet: Conic rho value, if ConicRhoType = swFeatureFilletProfileType_e .swFeatureFilletConicRho Conic radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletConicRadius Circular radius value, if ConicRhoType = swFeatureFilletProfileType_e.swFeatureFilletCircular
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e (see Remarks )
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
- `ConicRhoType` (System.Int32): Conic fillet profile type as defined in swFeatureFilletProfileType_e
- `NRadii` (System.Int32): Number of elements in the Radii array
- `Radii` (System.Double): In-process, unmanaged C++: Pointer to an array containing the radii for the variable radius fillet; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `RhoArr` (System.Double): In-process, unmanaged C++: Pointer to an array of conic shape values for the specified ConicRhoType for the variable radius fillet ; valid only if: Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius Options include swFeatureFilletOptions_e .swFeatureFilletVarRadiusType Options do not include swFeatureFilletOptions_e .swFeatureFilletUniformRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SetbackDistCount` (System.Int32): Number of elements in the SetBackDistances array
- `SetBackDistances` (System.Double): In-process, unmanaged C++: Pointer to an array containing setback distances along the fillet edge VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PointCount` (System.Int32): Number of elements in the PointRadiusArray and PointRhoArray arrays
- `PointRadiusArray` (System.Double): In-process, unmanaged C++: Pointer to an array containing radii at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PointRhoArray` (System.Double): In-process, unmanaged C++: Pointer to an array containing conic shape values for the specified ConicRhoType at various control points along the length of the edge; valid only if Ftyp = swFeatureFilletType_e .swFeatureFilletType_VariableRadius VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

IFeature pointer

## Remarks

See the
IFeatureManager::FeatureFillet2
Remarks.

## See Also

- `IFeatureManager.FeatureFillet2`
- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertMakeCorner`
- `IFeatureManager.FilletXpertRemove`
- `ISimpleFilletFeatureData2`
- `IVariableFilletFeatureData2`