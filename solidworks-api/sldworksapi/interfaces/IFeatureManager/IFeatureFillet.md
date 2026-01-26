---
type: method
interface: IFeatureManager
member: IFeatureFillet
returns: Feature
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet options as defined in swFeatureFilletOptions_e
  -
    name: R1
    type: System.Double
    description: Radius for uniform radius edge fillet
  -
    name: Ftyp
    type: System.Int32
    description: Type of fillet as defined in swFeatureFilletType_e
  -
    name: OverflowType
    type: System.Int32
    description: Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
  -
    name: NRadii
    type: System.Int32
    description: Number of radii for variable radius fillet
  -
    name: Radii
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles containing the radii for the variable radius fillet VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SetbackDistCount
    type: System.Int32
    description: Number of setback distances for the fillet along the edge
  -
    name: SetBackDistances
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles containing setback distances for the fillet along the edge of size SetbackDistCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: PointCount
    type: System.Int32
    description: Number of control point radii at various points along the length of the edge
  -
    name: PointRadiusArray
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles containing the control point radii of size PointCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FilletXpertChange
  - IFeatureManager.FilletXpertRemove
keywords:
  - ifeaturefillet
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
  - setback
  - dist
  - count
  - back
  - distances
  - point
  - radius
  - array
---

# IFeatureManager.IFeatureFillet

Obsolete. Superseded by IFeatureManager::IFeatureFillet2.

## Signature

```csharp
Feature IFeatureFillet( 
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
   System.Int32
NRadii
,
   ref System.Double
Radii
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
)
```
## Parameters

- `Options` (System.Int32): Feature fillet options as defined in swFeatureFilletOptions_e
- `R1` (System.Double): Radius for uniform radius edge fillet
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e
- `NRadii` (System.Int32): Number of radii for variable radius fillet
- `Radii` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles containing the radii for the variable radius fillet VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SetbackDistCount` (System.Int32): Number of setback distances for the fillet along the edge
- `SetBackDistances` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles containing setback distances for the fillet along the edge of size SetbackDistCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `PointCount` (System.Int32): Number of control point radii at various points along the length of the edge
- `PointRadiusArray` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles containing the control point radii of size PointCount VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

IFeature pointer

## Remarks

See the
IFeatureManager::FeatureFillet
Remarks.

## See Also

- `IFeatureManager.FilletXpertChange`
- `IFeatureManager.FilletXpertRemove`