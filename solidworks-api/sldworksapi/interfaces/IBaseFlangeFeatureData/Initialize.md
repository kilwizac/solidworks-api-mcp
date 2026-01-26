---
type: method
interface: IBaseFlangeFeatureData
member: Initialize
returns: void
parameters:
  -
    name: UseMaterialSheetMetalParameters
    type: System.Boolean
    description: True to use the sheet metal properties of the applied material, false to not
  -
    name: OverrideDefaultBendAllowance
    type: System.Boolean
    description: True to override the default bend allowance, false to not
  -
    name: CustomBendAllowance
    type: System.Object
    description: ICustomBendAllowance ; valid only if OverrideDefaultBendAllowance is true
  -
    name: OverrideDefaultBendRelief
    type: System.Boolean
    description: True to override the default bend relief, false to not
  -
    name: ReliefType
    type: System.Int32
    description: Relief type as defined in swSheetMetalReliefTypes_e ; valid only if OverrideDefaultBendRelief is true
  -
    name: UseReliefRatio
    type: System.Boolean
    description: True to use ReliefRatio, false to use ReliefWidth and ReliefDepth; valid only if OverrideDefaultBendRelief is true
  -
    name: ReliefRatio
    type: System.Double
    description: Relief ratio; valid only if UseReliefRatio is true
  -
    name: ReliefWidth
    type: System.Double
    description: Relief width (numerator of relief ratio); valid only if UseReliefRatio is false
  -
    name: ReliefDepth
    type: System.Double
    description: Relief depth (denominator of relief ratio); valid only if UseReliefRatio is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.GetCustomBendAllowance
  - IBaseFlangeFeatureData.ReliefDepth
  - IBaseFlangeFeatureData.ReliefRatio
  - IBaseFlangeFeatureData.ReliefType
  - IBaseFlangeFeatureData.ReliefWidth
  - IBaseFlangeFeatureData.UseDefaultBendAllowance
  - IBaseFlangeFeatureData.UseDefaultBendRelief
  - IBaseFlangeFeatureData.UseMaterialSheetMetalParameters
  - IBaseFlangeFeatureData.UseReliefRatio
keywords:
  - initialize
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - use
  - material
  - sheet
  - metal
  - parameters
  - boolean
  - override
  - default
  - bend
  - allowance
  - custom
  - object
  - relief
  - type
  - int32
  - ratio
  - double
  - width
  - depth
  - void
---

# IBaseFlangeFeatureData.Initialize

Initializes a newly created sheet metal base flange feature with the specified data.

## Signature

```csharp
void Initialize( 
   System.Boolean
UseMaterialSheetMetalParameters
,
   System.Boolean
OverrideDefaultBendAllowance
,
   System.Object
CustomBendAllowance
,
   System.Boolean
OverrideDefaultBendRelief
,
   System.Int32
ReliefType
,
   System.Boolean
UseReliefRatio
,
   System.Double
ReliefRatio
,
   System.Double
ReliefWidth
,
   System.Double
ReliefDepth
)
```
## Parameters

- `UseMaterialSheetMetalParameters` (System.Boolean): True to use the sheet metal properties of the applied material, false to not
- `OverrideDefaultBendAllowance` (System.Boolean): True to override the default bend allowance, false to not
- `CustomBendAllowance` (System.Object): ICustomBendAllowance ; valid only if OverrideDefaultBendAllowance is true
- `OverrideDefaultBendRelief` (System.Boolean): True to override the default bend relief, false to not
- `ReliefType` (System.Int32): Relief type as defined in swSheetMetalReliefTypes_e ; valid only if OverrideDefaultBendRelief is true
- `UseReliefRatio` (System.Boolean): True to use ReliefRatio, false to use ReliefWidth and ReliefDepth; valid only if OverrideDefaultBendRelief is true
- `ReliefRatio` (System.Double): Relief ratio; valid only if UseReliefRatio is true
- `ReliefWidth` (System.Double): Relief width (numerator of relief ratio); valid only if UseReliefRatio is false
- `ReliefDepth` (System.Double): Relief depth (denominator of relief ratio); valid only if UseReliefRatio is false

## Return Value

Unknown.

## Remarks

After you call this method to initialize the base flange feature, you cannot change any of the properties associated with this method's parameters. After initialization you can get, but not set, the following using this interface:
Whether to use default bend allowance
Whether to use default bend relief
Whether to use material sheet metal parameters
Whether to use relief ratio
Custom bend allowance
Relief depth
Relief ratio
Relief type
Relief width
You can, however, change any properties associated with the parent sheet metal after calling this method. For example:
ISheetMetalFeatureData::SetCustomBendAllowance
ISheetMetalFeatureData::SetOverrideDefaultParameter2
ISheetMetalFeatureData::AutoReliefType
ISheetMetalFeatureData::ReliefRatio
ISheetMetalFeatureData::UseMaterialSheetMetalParameters
See the Examples.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)

## See Also

- `IBaseFlangeFeatureData.GetCustomBendAllowance`
- `IBaseFlangeFeatureData.ReliefDepth`
- `IBaseFlangeFeatureData.ReliefRatio`
- `IBaseFlangeFeatureData.ReliefType`
- `IBaseFlangeFeatureData.ReliefWidth`
- `IBaseFlangeFeatureData.UseDefaultBendAllowance`
- `IBaseFlangeFeatureData.UseDefaultBendRelief`
- `IBaseFlangeFeatureData.UseMaterialSheetMetalParameters`
- `IBaseFlangeFeatureData.UseReliefRatio`