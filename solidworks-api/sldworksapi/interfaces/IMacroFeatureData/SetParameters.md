---
type: method
interface: IMacroFeatureData
member: SetParameters
returns: void
parameters:
  -
    name: ParamNames
    type: System.Object
    description: Array of parameter names
  -
    name: ParamTypes
    type: System.Object
    description: Array parameter data types as defined in swMacroFeatureParamType_e
  -
    name: ParamValues
    type: System.Object
    description: Array parameter values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetDoubleByName
  - IMacroFeatureData.GetIntegerByName
  - IMacroFeatureData.GetParameterCount
  - IMacroFeatureData.GetParameters
  - IMacroFeatureData.GetStringByName
  - IMacroFeatureData.IGetParameters
  - IMacroFeatureData.SetDoubleByName
  - IMacroFeatureData.SetIntegerByName
  - IMacroFeatureData.SetStringByName
keywords:
  - setparameters
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parameters
  - param
  - names
  - object
  - types
  - values
  - void
---

# IMacroFeatureData.SetParameters

Sets the user-defined parameters.

## Signature

```csharp
void SetParameters( 
   System.Object
ParamNames
,
   System.Object
ParamTypes
,
   System.Object
ParamValues
)
```
## Parameters

- `ParamNames` (System.Object): Array of parameter names
- `ParamTypes` (System.Object): Array parameter data types as defined in swMacroFeatureParamType_e
- `ParamValues` (System.Object): Array parameter values

## Return Value

Unknown.

## See Also

- `IMacroFeatureData.GetDoubleByName`
- `IMacroFeatureData.GetIntegerByName`
- `IMacroFeatureData.GetParameterCount`
- `IMacroFeatureData.GetParameters`
- `IMacroFeatureData.GetStringByName`
- `IMacroFeatureData.IGetParameters`
- `IMacroFeatureData.SetDoubleByName`
- `IMacroFeatureData.SetIntegerByName`
- `IMacroFeatureData.SetStringByName`