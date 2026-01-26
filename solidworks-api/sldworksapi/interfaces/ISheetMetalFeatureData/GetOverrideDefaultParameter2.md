---
type: method
interface: ISheetMetalFeatureData
member: GetOverrideDefaultParameter2
returns: System.Int32
parameters:
  -
    name: Parameter
    type: System.Int32
    description: Default parameter as defined in swSheetMetalOverrideDefaultParameters_e
  -
    name: OverrideDefaultParameter
    type: System.Boolean
    description: True if Parameter is overridden, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISheetMetalFeatureData.SetOverrideDefaultParameter2
keywords:
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - override
  - default
  - parameters
  - auto
  - reliefs
  - bend
  - allowance
  - getoverridedefaultparameter2
  - feature
  - data
  - parameter2
  - parameter
  - int32
  - boolean
  - option
  - relief
  - vb
  - net
  - vba
---

# ISheetMetalFeatureData.GetOverrideDefaultParameter2

Gets whether the specified default parameter is overridden in this sheet metal feature in a multibody sheet metal part.

## Signature

```csharp
System.Int32 GetOverrideDefaultParameter2( 
   System.Int32
Parameter
,
   out System.Boolean
OverrideDefaultParameter
)
```
## Parameters

- `Parameter` (System.Int32): Default parameter as defined in swSheetMetalOverrideDefaultParameters_e
- `OverrideDefaultParameter` (System.Boolean): True if Parameter is overridden, false if not

## Return Value

Result code as defined in swSheetMetalModifierError_e

## Remarks

This property is only valid for multibody sheet metal parts created in SOLIDWORKS 2013 and later.

## Examples

- Set Override Option for Auto Relief Default Parameters (C#) (Set_Override_Option_for_Auto_Relief_Default_Parameters_Example_CSharp.htm)
- Set Override Option for Auto Relief Default Parameters (VB.NET) (Set_Override_Option_for_Auto_Relief_Default_Parameters_Example_VBNET.htm)
- Set Override Option for Auto Relief Default Parameters (VBA) (Set_Override_Option_for_Auto_Relief_Default_Parameters_Example_VB.htm)

## See Also

- `ISheetMetalFeatureData.SetOverrideDefaultParameter2`