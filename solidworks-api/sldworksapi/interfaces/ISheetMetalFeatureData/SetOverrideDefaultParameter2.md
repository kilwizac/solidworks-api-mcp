---
type: method
interface: ISheetMetalFeatureData
member: SetOverrideDefaultParameter2
returns: System.Int32
parameters:
  -
    name: Parameter
    type: System.Int32
    description: Default parameter as defined in swSheetMetalOverrideDefaultParameters_e
  -
    name: OverrideDefaultParameter
    type: System.Boolean
    description: True to override Parameter, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBaseFlangeFeatureData.Initialize
  - ISheetMetalFeatureData.GetOverrideDefaultParameter2
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - bend
  - allowance
  - override
  - default
  - parameters
  - auto
  - reliefs
  - setoverridedefaultparameter2
  - feature
  - data
  - parameter2
  - parameter
  - int32
  - boolean
  - ibaseflangefeaturedata
---

# ISheetMetalFeatureData.SetOverrideDefaultParameter2

Sets whether to override the specified default parameter in this sheet metal feature in a multibody sheet metal part.

## Signature

```csharp
System.Int32 SetOverrideDefaultParameter2( 
   System.Int32
Parameter
,
   System.Boolean
OverrideDefaultParameter
)
```
## Parameters

- `Parameter` (System.Int32): Default parameter as defined in swSheetMetalOverrideDefaultParameters_e
- `OverrideDefaultParameter` (System.Boolean): True to override Parameter, false to not

## Return Value

Result code as defined in swSheetMetalModifierError_e

## Remarks

This property is only valid for multibody sheet metal parts created in SOLIDWORKS 2013 and later.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)

## See Also

- `IBaseFlangeFeatureData.Initialize`
- `ISheetMetalFeatureData.GetOverrideDefaultParameter2`