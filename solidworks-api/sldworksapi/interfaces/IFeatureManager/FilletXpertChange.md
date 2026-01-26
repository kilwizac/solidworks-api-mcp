---
type: method
interface: IFeatureManager
member: FilletXpertChange
returns: Feature
parameters:
  -
    name: Options
    type: System.Int32
    description: Feature fillet option as defined in swFeatureFilletOptions_e
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
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.FeatureFillet
  - IFeatureManager.FilletXpertRemove
keywords:
  - fillets
  - filletxpert
  - filletxpertchange
  - ifeaturemanager
  - feature
  - manager
  - fillet
  - xpert
  - change
  - options
  - int32
  - r1
  - double
  - ftyp
  - overflow
  - type
---

# IFeatureManager.FilletXpertChange

Changes the parameters on the selected filleted faces, regardless of whether the filleted faces were created manually or with FilletXpert, provided that FilletXpert can process them.

## Signature

```csharp
Feature FilletXpertChange( 
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
)
```
## Parameters

- `Options` (System.Int32): Feature fillet option as defined in swFeatureFilletOptions_e
- `R1` (System.Double): Radius for uniform radius edge fillet
- `Ftyp` (System.Int32): Type of fillet as defined in swFeatureFilletType_e
- `OverflowType` (System.Int32): Control of fillet overflowing onto adjacent surfaces as defined in swFilletOverFlowType_e

## Return Value

IFeature

## See Also

- `IFeatureManager.FeatureFillet`
- `IFeatureManager.FilletXpertRemove`