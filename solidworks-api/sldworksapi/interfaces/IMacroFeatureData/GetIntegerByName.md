---
type: method
interface: IMacroFeatureData
member: GetIntegerByName
returns: void
parameters:
  -
    name: ParamName
    type: System.String
    description: Name of the parameter
  -
    name: ParamValue
    type: System.Int32
    description: Integer value
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetParameterCount
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.IGetParameters
  - IMacroFeatureData.ISetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetParameters
  - IMacroFeatureData.SetStringByName
keywords:
  - getintegerbyname
  - imacrofeaturedata
  - macro
  - feature
  - data
  - integer
  - name
  - param
  - string
  - value
  - int32
  - void
  - cut
  - body
  - half
  - using
  - vba
---

# IMacroFeatureData.GetIntegerByName

Gets an integer value by parameter name.

## Signature

```csharp
void GetIntegerByName( 
   System.String
ParamName
,
   out System.Int32
ParamValue
)
```
## Parameters

- `ParamName` (System.String): Name of the parameter
- `ParamValue` (System.Int32): Integer value

## Return Value

Unknown.

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.ISetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetParameters`
- `IMacroFeatureData.SetStringByName`