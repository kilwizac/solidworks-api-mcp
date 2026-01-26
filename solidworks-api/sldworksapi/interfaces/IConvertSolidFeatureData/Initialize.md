---
type: method
interface: IConvertSolidFeatureData
member: Initialize
returns: void
parameters:
  -
    name: UseMaterialSheetMetalParameters
    type: System.Boolean
    description: True to use sheet metal parameters attached to the selected material, false to not (see Remarks )
  -
    name: UseGaugeTableParameters
    type: System.Boolean
    description: True to use a gauge table values (material thickness, bend radius, and bend calculation method) as the basis of this feature, false to not
  -
    name: CustomBendAllowance
    type: System.Object
    description: ICustomBendAllowance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - initialize
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - use
  - material
  - sheet
  - metal
  - parameters
  - boolean
  - gauge
  - table
  - custom
  - bend
  - allowance
  - object
  - void
---

# IConvertSolidFeatureData.Initialize

Initializes this convert solid feature to have the specified properties.

## Signature

```csharp
void Initialize( 
   System.Boolean
UseMaterialSheetMetalParameters
,
   System.Boolean
UseGaugeTableParameters
,
   System.Object
CustomBendAllowance
)
```
## Parameters

- `UseMaterialSheetMetalParameters` (System.Boolean): True to use sheet metal parameters attached to the selected material, false to not (see Remarks )
- `UseGaugeTableParameters` (System.Boolean): True to use a gauge table values (material thickness, bend radius, and bend calculation method) as the basis of this feature, false to not
- `CustomBendAllowance` (System.Object): ICustomBendAllowance

## Return Value

Unknown.

## Remarks

UseMaterialSheetMetalParameters is valid only if a material is applied to the solid.

## Examples

- IConvertSolidFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IConvertSolidFeatureData)